<?php

namespace App\Filament\Admin\Resources\TransactionResource\Pages;

use App\Filament\Admin\Resources\TransactionResource;
use Filament\Actions\Action;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditTransaction extends EditRecord
{
    protected static string $resource = TransactionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('billout')
                ->label('Bill Out')
                ->icon('heroicon-o-currency-dollar')
                ->color('success')
                ->requiresConfirmation()
                ->modalHeading('Confirm Bill Out')
                ->modalDescription('Are you sure you want to bill out this transaction? This action cannot be undone.')
                ->action(function () {
                    // Resolve and run your service
                    // app(TransactionService::class)->billout($this->record);

                    // Optional: show a notification
                    Notification::make()
                        ->title('Transaction billed out successfully')
                        ->success()
                        ->send();
                }),
            Actions\DeleteAction::make(),
        ];
    }
}
