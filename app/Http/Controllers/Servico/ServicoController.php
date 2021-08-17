<?php

namespace App\Http\Controllers\Servico;

use Inertia\Inertia;
use App\Models\Servico;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class ServicoController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Servico/Index');
    }

    /**
     * @param Servico $servico
     * @return \Inertia\Response
     */
    public function cadastro(Servico $servico = null): \Inertia\Response
    {
        return Inertia::render('Servico/Cadastro');
    }
}
