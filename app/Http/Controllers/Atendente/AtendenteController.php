<?php

namespace App\Http\Controllers\Atendente;

use App\Http\Controllers\Controller;
use App\Jobs\Atendente\SalvarAtendenteJob;
use Illuminate\Http\Request;
use App\Models\Atendente;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AtendenteController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
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
    public function cadastro(Atendente $atendente = null): \Inertia\Response
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
    public function salvar(Request $request): \Illuminate\Http\RedirectResponse
    {
        $atributos = collect($request->all());
        $atendente = SalvarAtendenteJob::dispatchNow($atributos);

        return Redirect()->route('atendentes.cadastro', $atendente)->with('success', 'Dados salvos com sucesso!');
    }

    /**
     * @param Request $request
     * @param Atendente $atendente
     * @return \Illuminate\Http\RedirectResponse
     */
    public function editar(Request $request, Atendente $atendente): \Illuminate\Http\RedirectResponse
    {
        $atributos = collect($request->all());
        $atendente = SalvarAtendenteJob::dispatchNow($atributos, $atendente);

        return Redirect()->route('atendentes.cadastro', $atendente)->with('success', 'Dados salvos com sucesso!');
    }

    /**
     * @param Atendente $atendente
     * @return \Illuminate\Http\RedirectResponse
     */
    public function excluir(Atendente $atendente): \Illuminate\Http\RedirectResponse
    {
        $atendente->delete();

        return Redirect()->back()->with('success', 'Atendente excluído com sucesso!');
    }
}
