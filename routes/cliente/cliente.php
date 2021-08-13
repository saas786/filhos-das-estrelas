<?php

use App\Http\Controllers\Cliente\ClienteController;

Route::group(
    ['prefix' => 'clientes', 'middleware' => 'auth'],
    function () {
        Route::get('/', [ClienteController::class, 'index'])->name('clientes.index');
        Route::get('/cadastro/{cliente?}', [ClienteController::class, 'cadastro'])->name('clientes.cadastro');
        Route::post('/salvar', [ClienteController::class, 'salvar'])->name('clientes.salvar');
        Route::put('/editar/{cliente}', [ClienteController::class, 'editar'])->name('clientes.editar');
        Route::delete('/excluir/{cliente}', [ClienteController::class, 'excluir'])->name('clientes.excluir');
    }
);
