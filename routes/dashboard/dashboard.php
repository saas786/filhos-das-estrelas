<?php

use App\Http\Controllers\Dashboard\DashboardController;

Route::group(
    ['prefix' => '/', 'middleware' => 'auth'],
    function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard.index');
    }
);
