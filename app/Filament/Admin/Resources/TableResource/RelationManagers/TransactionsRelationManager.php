<?php

namespace App\Filament\Admin\Resources\TableResource\RelationManagers;

use App\Enums\TransactionStatus;
use Filament\Tables\Actions\Action;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TransactionsRelationManager extends RelationManager
{
    protected static string $relationship = 'transactions';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\ToggleButtons::make('status')
                    ->inline()
                    ->options(TransactionStatus::class)
                    ->required(),
                Forms\Components\TextInput::make('total_amount')->default(0)->readOnly(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('table_id')
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\TextColumn::make('total_amount'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Action::make('view')
                    ->label('View Transaction')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => route('filament.admin.resources.transactions.edit', ['record' => $record->id]))
                    ->openUrlInNewTab(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
