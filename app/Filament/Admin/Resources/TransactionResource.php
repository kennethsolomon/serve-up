<?php

namespace App\Filament\Admin\Resources;

use App\Enums\TransactionStatus;
use App\Filament\Admin\Resources\TransactionResource\Pages;
use App\Filament\Admin\Resources\TransactionResource\RelationManagers;
use App\Models\Transaction;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TransactionResource extends Resource
{
    protected static ?string $model = Transaction::class;

    protected static ?string $navigationIcon = 'heroicon-o-receipt-percent';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
            Forms\Components\Select::make('table_id')
                ->label('Table')
                ->relationship('table', 'name')
                ->searchable()
                ->preload()
                ->required(),
                Forms\Components\ToggleButtons::make('status')
                    ->inline()
                    ->options(TransactionStatus::class)
                    ->required(),
                Forms\Components\TextInput::make('total_amount')->default(0)->readOnly(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                  ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('table.name')->label('Table')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_amount')->money('PHP')->default(0),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('table_id')
                    ->label('Table')
                    ->relationship('table', 'name')
                    ->searchable(),
                Tables\Filters\SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        TransactionStatus::Pending->value => 'Pending',
                        TransactionStatus::Completed->value => 'Completed',
                        TransactionStatus::Cancelled->value => 'Cancelled',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\OrdersRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTransactions::route('/'),
            'create' => Pages\CreateTransaction::route('/create'),
            'edit' => Pages\EditTransaction::route('/{record}/edit'),
        ];
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Operations';
    }

    public static function getNavigationSort(): ?int
    {
        return 1;
    }
}
