<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cliente\SalvarClienteRequest;
use App\Jobs\Cliente\ExcluirClienteJob;
use App\Jobs\Cliente\SalvarClienteJob;
use App\Jobs\Cliente\SalvarContatoClienteJob;
use App\Jobs\Cliente\SalvarEnderecoClienteJob;
use App\Models\Cliente;
use App\Queries\Cliente\ListaClientesQuery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ClienteController extends Controller
{
    /**
     * @param Request $request
     * @return \Inertia\Response
     */
    public function index(Request $request): \Inertia\Response
    {
        $atributos = collect($request->all());

        $clientes = (new ListaClientesQuery($atributos))->getQuery()
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
                'cliente' => $cliente,
                'endereco' => $cliente ? $cliente->endereco : '',
                'contato' => $cliente ? $cliente->contato : ''
            ]
        );
    }

    /**
     * @param SalvarClienteRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function salvar(SalvarClienteRequest $request): \Illuminate\Http\RedirectResponse
    {
        $atributos = collect($request->all());

        $cliente = SalvarClienteJob::dispatchNow($atributos);

        if ($atributos->get('cep') || $atributos->get('logradouro')) {
            $endereco = SalvarEnderecoClienteJob::dispatchNow($atributos, $cliente);
        }

        if (
            $atributos->get('telefone_fixo')
            || $atributos->get('telefone_celular')
            || $atributos->get('email')
        ) {
            $contato = SalvarContatoClienteJob::dispatchNow($atributos, $cliente);
        }

        return Redirect()->route('clientes.cadastro', $cliente)->with('success', 'Dados salvos com sucesso!');
    }

    /**
     * @param SalvarClienteRequest $request
     * @param Cliente $cliente
     * @return \Illuminate\Http\RedirectResponse
     */
    public function editar(SalvarClienteRequest $request, Cliente $cliente): \Illuminate\Http\RedirectResponse
    {
        $atributos = collect($request->all());

        $cliente = SalvarClienteJob::dispatchNow($atributos, $cliente);

        if ($atributos->get('cep') || $atributos->get('logradouro')) {
            $endereco = SalvarEnderecoClienteJob::dispatchNow($atributos, $cliente);
        }

        if (
            $atributos->get('telefone_fixo')
            || $atributos->get('telefone_celular')
            || $atributos->get('email')
        ) {
            $contato = SalvarContatoClienteJob::dispatchNow($atributos, $cliente);
        }

        return Redirect()->back()->with('success', 'Dados salvos com sucesso!');
    }

    /**
     * @param Cliente $cliente
     * @return \Illuminate\Http\RedirectResponse
     */
    public function excluir(Cliente $cliente): \Illuminate\Http\RedirectResponse
    {
        ExcluirClienteJob::dispatchNow($cliente);

        return Redirect()->back()->with('success', 'Dados excluídos com sucesso!');
    }
}
