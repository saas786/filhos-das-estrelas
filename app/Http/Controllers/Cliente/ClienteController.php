<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cliente\SalvarClienteRequest;
use App\Jobs\Cliente\ExcluirClienteJob;
use App\Jobs\Cliente\SalvarClienteJob;
use App\Jobs\Cliente\SalvarContatoClienteJob;
use App\Jobs\Cliente\SalvarEnderecoClienteJob;
use App\Models\Cliente;
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
            dd('teste');
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
    public function excluir(Cliente $cliente)
    {
        ExcluirClienteJob::dispatchNow($cliente);

        return Redirect()->back()->with('success', 'Dados excluídos com sucesso!');
    }
}
