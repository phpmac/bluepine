<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/strategy', function () {
    return Inertia::render('strategy');
})->name('strategy');

Route::get('/portfolio', function () {
    return Inertia::render('portfolio');
})->name('portfolio');

Route::get('/ecosystem', function () {
    return Inertia::render('ecosystem');
})->name('ecosystem');

Route::get('/insights', function () {
    return Inertia::render('insights');
})->name('insights');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/aesc', function () {
    return Inertia::render('aesc');
})->name('aesc');

Route::get('/aesc2', function () {
    return Inertia::render('aesc2');
})->name('aesc2');

Route::get('/airdrop', function () {
    return Inertia::render('airdrop');
})->name('airdrop');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
