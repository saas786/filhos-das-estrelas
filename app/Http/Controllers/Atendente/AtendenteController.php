<?php

namespace App\Http\Controllers\Atendente;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Atendente;
use Inertia\Inertia;

class AtendenteController extends Controller
{
    public function index()
    {
        return Inertia::render('Atendente/Index');
    }

    /**
     * @param Atendente $cliente
     */
    public function cadastro(Atendente $cliente = null)
    {
        return Inertia::render('Atendente/Cadastro');
    }
}
