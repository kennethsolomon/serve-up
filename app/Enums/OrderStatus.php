<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;

enum OrderStatus: string implements HasColor, HasIcon, HasLabel
{
    case Preparing = 'preparing';

    case Served = 'served';

    case Cancelled = 'cancelled';

    public function getLabel(): string
    {
        return match ($this) {
            self::Preparing => 'Preparing',
            self::Served => 'Served',
            self::Cancelled => 'Cancelled',
        };
    }

    public function getColor(): string | array | null
    {
        return match ($this) {
            self::Preparing => 'warning',
            self::Served => 'success',
            self::Cancelled => 'danger',
        };
    }

    public function getIcon(): ?string
    {
        return match ($this) {
            self::Preparing => 'heroicon-m-clock',
            self::Served => 'heroicon-m-check-badge',
            self::Cancelled => 'heroicon-m-x-circle',
        };
    }
}

