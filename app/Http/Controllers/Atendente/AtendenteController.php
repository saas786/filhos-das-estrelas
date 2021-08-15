<?php

namespace App\Http\Controllers\Atendente;

use App\Http\Controllers\Controller;
use App\Jobs\Atendente\SalvarAtendenteJob;
use Illuminate\Http\Request;
use App\Models\Atendente;
use Illuminate\Support\Facades\Redirect;
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

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function salvar(Request $request)
    {
        $atributos = collect($request->all());
        $atendente = SalvarAtendenteJob::dispatchNow($atributos);

        return Redirect()->route('atendentes.cadastro', $atendente)->with('success', 'Dados salvos com sucesso!');
    }
}
