<?php

use App\Http\Controllers\Atendente\AtendenteController;

Route::group(
    ['prefix' => 'atendente', 'middleware' => 'auth'],
    function () {
        Route::get('/', [AtendenteController::class, 'index'])->name('atendentes.index');
        Route::get('/cadastro/{cadastro?}', [AtendenteController::class, 'cadastro'])->name('atendentes.cadastro');
    }
);
