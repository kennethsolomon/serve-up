<?php

namespace App\Models;

use App\Enums\ProductStatus;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'status',
        'is_popular',
        'category_id',
    ];

    protected $casts = [
        'status' => ProductStatus::class,
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
