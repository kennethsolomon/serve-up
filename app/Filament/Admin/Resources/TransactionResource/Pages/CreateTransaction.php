<?php

namespace App\Filament\Admin\Resources\TransactionResource\Pages;

use App\Filament\Admin\Resources\TransactionResource;
use Filament\Actions;
use App\Models\Table;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Validation\ValidationException;

class CreateTransaction extends CreateRecord
{
    protected static string $resource = TransactionResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        dd('test', $data);
        $hasPendingTransaction = Table::where('id', $data['table_id'])->whereHas('transactions', function ($query) {
            $query->where('status', 'pending');
        })->exists();

        if ($hasPendingTransaction) {
            throw ValidationException::withMessages([
                'name' => 'You cannot create a new table while there is a pending transaction.',
            ]);
        }

        return $data;
    }
}
