<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Rotas de autenticação
Auth::routes();

require_once base_path('routes/cliente/cliente.php');
require_once base_path('routes/atendente/atendente.php');
require_once base_path('routes/dashboard/dashboard.php');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
