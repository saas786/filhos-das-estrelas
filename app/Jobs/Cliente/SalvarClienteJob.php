<?php

namespace App\Jobs\Cliente;

use App\Models\Cliente;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class SalvarClienteJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * @var Collection
     */
    protected $atributos;

    /**
     * @var Cliente
     */
    protected $cliente;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Collection $atributos, Cliente $cliente = null)
    {
        $this->atributos = $atributos;
        $this->cliente = $cliente ?? new Cliente();
    }

    /**
     * @return Cliente
     */
    public function handle(): Cliente
    {
        return DB::transaction(
            function () {
                $this->cliente->nome = $this->atributos->get('nome');
                $this->cliente->data_nascimento = $this->atributos->get('data_nascimento');
                $this->cliente->genero = $this->atributos->get('genero');
                $this->cliente->motivo = $this->atributos->get('motivo');

                $this->cliente->save();

                return $this->cliente;
            }
        );
    }
}
