<?php

namespace App\Jobs\Cliente;

use App\Models\Cliente;
use App\Models\Contato;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class SalvarContatoClienteJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * @var Collection
     */
    private $atributos;

    /**
     * @var Cliente
     */
    private $cliente;

    /**
     * @var Contato
     */
    private $contato;

    /**
     * @param Collection $atributos
     * @param Cliente $cliente
     */
    public function __construct(Collection $atributos, Cliente $cliente)
    {
        $this->atributos = $atributos;
        $this->cliente = $cliente;
        $this->contato = $cliente->contato ? $cliente->contato : new Contato();
    }

    /**
     * @return Contato
     */
    public function handle(): Contato
    {
        return DB::transaction(
            function () {
                dd($this->atributos->get('email'));
                $this->contato->cliente()->associate($this->cliente);
                $this->contato->telefone_fixo = $this->atributos->get('telefone_fixo');
                $this->contato->telefone_celular = $this->atributos->get('telefone_celular');
                $this->contato->email = $this->atributos->get('email');

                $this->contato->save();

                return $this->contato;
            }
        );
    }
}
