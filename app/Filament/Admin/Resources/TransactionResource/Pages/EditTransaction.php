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
            Action::make('back_to_table')
                ->label('Back to Table')
                ->icon('heroicon-o-arrow-left')
                ->color('gray')
                ->url(function () {
                    return route('filament.admin.resources.tables.edit', ['record' => $this->record->table_id]);
                })
                ->openUrlInNewTab(false), // Optional: open in same tab or new tab
            Actions\DeleteAction::make(),
        ];
    }

    protected function getListeners(): array
    {
        return [
            'transaction-total-updated' => 'updateTotalAmount',
        ];
    }

    public function updateTotalAmount($total): void
    {
        $this->data['total_amount'] = $total;
        $this->fillForm();
    }
}
