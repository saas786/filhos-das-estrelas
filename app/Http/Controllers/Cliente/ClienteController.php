<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cliente\SalvarClienteRequest;
use App\Jobs\Cliente\SalvarClienteJob;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use function GuzzleHttp\Promise\all;

class ClienteController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        $clientes = Cliente::select(
            [
                'id', 'nome', 'data_nascimento', 'genero'
            ]
        )
            ->orderBy('nome')
            ->paginate();

        return Inertia::render(
            'Cliente/Index',
            [
                'clientes' => $clientes
            ]
        );
    }

    /**
     * @param Cliente $cliente
     * @return \Inertia\Response
     */
    public function cadastro(Cliente $cliente = null): \Inertia\Response
    {
        return Inertia::render(
            'Cliente/Cadastro',
            [
                'cliente' => $cliente
            ]
        );
    }

    /**
     * @param SalvarClienteRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function salvar(SalvarClienteRequest $request): \Illuminate\Http\RedirectResponse
    {
        $cliente = SalvarClienteJob::dispatchNow(collect($request->all()));

        return Redirect()->route('clientes.cadastro', $cliente)->with('success', 'Dados salvos com sucesso!');
    }

    /**
     * @param SalvarClienteRequest $request
     * @param Cliente $cliente
     * @return \Illuminate\Http\RedirectResponse
     */
    public function editar(SalvarClienteRequest $request, Cliente $cliente): \Illuminate\Http\RedirectResponse
    {
        $cliente = SalvarClienteJob::dispatchNow(collect($request->all()), $cliente);

        return Redirect()->back()->with('success', 'Dados salvos com sucesso!');
    }
}
