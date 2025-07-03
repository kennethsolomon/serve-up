<?php
namespace App\Models;

use App\Enums\TableStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Table extends Model
{
    protected $fillable = [
        'name',
        'qr_code',
        'status',
    ];

    protected $casts = [
        'status' => TableStatus::class,
    ];

    protected static function booted()
    {
        static::creating(function ($table) {
            $table->qr_code = url('/table/' . Str::uuid());
        });
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
