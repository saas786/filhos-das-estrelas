<?php

namespace App\Http\Controllers\Atendente;

use App\Http\Controllers\Controller;
use App\Jobs\Atendente\SalvarAtendenteJob;
use Illuminate\Http\Request;
use App\Models\Atendente;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AtendenteController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index()
    {
        $atendentes = Atendente::select(
            [
                'id',
                'nome',
                'genero',
                DB::raw('DATE_FORMAT(data_nascimento, "%d/%m/%Y") as nascimento')
            ]
        )->orderBy('nome')->paginate();

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

    /**
     * @param Request $request
     * @param Atendente $atendente
     */
    public function editar(Request $request, Atendente $atendente)
    {
        $atributos = collect($request->all());
        $atendente = SalvarAtendenteJob::dispatchNow($atributos, $atendente);

        return Redirect()->route('atendentes.cadastro', $atendente)->with('success', 'Dados salvos com sucesso!');
    }

    /**
     * @param Atendente $atendente
     */
    public function excluir(Atendente $atendente)
    {
        $atendente->delete();

        return Redirect()->back()->with('success', 'Atendente excluído com sucesso!');
    }
}
