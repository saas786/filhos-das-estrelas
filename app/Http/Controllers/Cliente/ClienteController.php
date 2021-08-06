<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClienteController extends Controller
{
    public function index()
    {
        return Inertia::render('Cliente/Index');
    }

    public function cadastro()
    {
        return Inertia::render('Cliente/Cadastro');
    }
}
