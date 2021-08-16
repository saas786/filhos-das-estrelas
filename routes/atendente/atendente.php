<?php

use App\Http\Controllers\Atendente\AtendenteController;

Route::group(
    ['prefix' => 'atendente', 'middleware' => 'auth'],
    function () {
        Route::get('/', [AtendenteController::class, 'index'])->name('atendentes.index');
        Route::get('/cadastro/{atendente?}', [AtendenteController::class, 'cadastro'])->name('atendentes.cadastro');
        Route::post('/salvar', [AtendenteController::class, 'salvar'])->name('atendentes.salvar');
        Route::put('/editar/{atendente}', [AtendenteController::class, 'editar'])->name('atendentes.editar');
        Route::delete('/excluir/{atendente}', [AtendenteController::class, 'excluir'])->name('atendentes.excluir');
    }
);
