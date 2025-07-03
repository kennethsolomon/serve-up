<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;

enum ProductStatus: string implements HasColor, HasIcon, HasLabel
{
    case InStock = 'in-stock';

    case OutOfStock = 'out-of-stock';

    public function getLabel(): string
    {
        return match ($this) {
            self::InStock => 'In Stock',
            self::OutOfStock => 'Out Of Stock',
        };
    }

    public function getColor(): string | array | null
    {
        return match ($this) {
            self::InStock => 'success',
            self::OutOfStock => 'danger',
        };
    }

    public function getIcon(): ?string
    {
        return match ($this) {
            self::InStock => 'heroicon-m-check-badge',
            self::OutOfStock => 'heroicon-m-x-circle',
        };
    }
}

