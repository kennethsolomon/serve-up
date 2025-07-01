<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/funnel', function () {
    return Inertia::render('funnel/index');
})->name('funnel.index');

Route::get('/menu', function () {
    return Inertia::render('menu/index');
})->name('funnel.menu');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
