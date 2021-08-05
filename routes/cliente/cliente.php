<?php

use App\Http\Controllers\Cliente\ClienteController;

Route::group(
    ['prefix' => 'clientes', 'middleware' => 'auth'],
    function () {
        Route::get('/', [ClienteController::class, 'index'])->name('clientes.index');
    }
);
