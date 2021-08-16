<?php

use App\Http\Controllers\Servico\ServicoController;

Route::group(
    ['prefix' => 'servicos', 'middleware' => 'auth'],
    function () {
        Route::get('/', [ServicoController::class, 'index'])->name('servicos.index');
    }
);
