<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use App\Jobs\Cliente\SalvarClienteJob;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClienteController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index()
    {
        $clientes = Cliente::orderBy('nome')->paginate();

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
    public function cadastro(Cliente $cliente = null)
    {
        return Inertia::render(
            'Cliente/Cadastro',
            [
                'cliente' => $cliente
            ]
        );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function salvar(Request $request)
    {
        $cliente = SalvarClienteJob::dispatchNow(collect($request->all()));

        return Redirect()->route('clientes.cadastro', $cliente);
    }
}
