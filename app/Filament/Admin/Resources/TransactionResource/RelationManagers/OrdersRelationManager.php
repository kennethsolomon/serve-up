<?php

namespace App\Filament\Admin\Resources\TransactionResource\RelationManagers;

use App\Enums\OrderStatus;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Set;
use Filament\Forms\Get;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrdersRelationManager extends RelationManager
{
    protected static string $relationship = 'orders';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('product_id')
                    ->label('Product')
                    ->relationship('product', 'name')
                    ->searchable()
                    ->preload()
                    ->reactive()
                    ->required()
                    ->afterStateUpdated(function (Set $set, Get $get) {
                        $product = Product::find($get('product_id'));

                        $price = $product?->price ?? 0;
                        $quantity = $get('quantity') ?? 0;

                        $set('price', $price);
                        $set('total_price', $price * $quantity);
                    }),

                Forms\Components\TextInput::make('quantity')
                    ->numeric()
                    ->required()
                    ->reactive()
                    ->afterStateUpdated(function (Set $set, Get $get) {
                        $price = Product::find($get('product_id'))?->price ?? 0;
                        $quantity = $get('quantity') ?? 0;

                        $set('total_price', $price * $quantity);
                    }),

                Forms\Components\TextInput::make('price')
                    ->label('Price')
                    ->prefix('₱')
                    ->readOnly(),

                Forms\Components\TextInput::make('total_price')
                    ->label('Total')
                    ->prefix('₱')
                    ->readOnly(),

                Forms\Components\ToggleButtons::make('status')
                    ->inline()
                    ->options(OrderStatus::class)
                    ->nullable(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('product_id')
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('Order #'),
                Tables\Columns\TextColumn::make('product.name')
                    ->label('Product'),
                Tables\Columns\TextColumn::make('price')->money('PHP'),
                Tables\Columns\TextColumn::make('quantity'),
                Tables\Columns\TextColumn::make('total_price')->money('PHP'),
                Tables\Columns\TextColumn::make('status')
                    ->badge(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make()
                    ->after(fn () => $this->recalculateTransactionTotal()),
            ])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->after(fn () => $this->recalculateTransactionTotal()),
                Tables\Actions\DeleteAction::make()
                    ->after(fn () => $this->recalculateTransactionTotal()),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->after(fn () => $this->recalculateTransactionTotal()),
                ]),
            ]);
    }

    protected function recalculateTransactionTotal(): void
    {
        $transaction = $this->getOwnerRecord();
        $total = $transaction->orders()->sum('total_price');

        // Force update in database
        $transaction->total_amount = $total;
        $transaction->save();

        // Live update the parent page via Livewire event
        $this->dispatch('transaction-total-updated', total: $total);
    }
}
