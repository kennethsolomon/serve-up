<?php

namespace App\Models;

use App\Enums\OrderStatus;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'transaction_id',
        'product_id',
        'quantity',
        'price',
        'status',
        'total_price',
    ];

    protected $casts = [
        'status' => OrderStatus::class,
    ];

    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
