<?php

namespace App\Http\Controllers\Atendente;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Atendente;
use Inertia\Inertia;

class AtendenteController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index()
    {
        $atendentes = Atendente::orderBy('nome')->paginate();
        return Inertia::render(
            'Atendente/Index',
            [
                'atendentes' => $atendentes
            ]
        );
    }

    /**
     * @param Atendente $cliente
     * @return \Inertia\Response
     */
    public function cadastro(Atendente $atendente = null)
    {
        return Inertia::render(
            'Atendente/Cadastro',
            [
                'atendente' => $atendente
            ]
        );
    }
}
