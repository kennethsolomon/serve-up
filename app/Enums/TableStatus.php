<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;

enum TableStatus: string implements HasColor, HasIcon, HasLabel
{
    case Available = 'available';

    case Occupied = 'occupied';

    case Reserved = 'reserved';

    public function getLabel(): string
    {
        return match ($this) {
            self::Available => 'Available',
            self::Occupied => 'Occupied',
            self::Reserved => 'Reserved',
        };
    }

    public function getColor(): string | array | null
    {
        return match ($this) {
            self::Available => 'success',
            self::Occupied => 'danger',
            self::Reserved => 'warning',
        };
    }

    public function getIcon(): ?string
    {
        return match ($this) {
            self::Available => 'heroicon-m-check-badge',
            self::Occupied => 'heroicon-m-x-circle',
            self::Reserved => 'heroicon-m-exclamation-triangle',
        };
    }
}

