<?php

namespace App\Models;

use App\Enums\TransactionStatus;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'table_id',
        'status',
        'total_amount',
    ];

    protected $casts = [
        'status' => TransactionStatus::class,
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function table()
    {
        return $this->belongsTo(Table::class);
    }
}
