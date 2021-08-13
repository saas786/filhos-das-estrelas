<?php

namespace App\Jobs\Cliente;

use App\Models\Cliente;
use App\Models\Endereco;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class SalvarEnderecoClienteJob implements ShouldQueue
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
     * @var Endereco
     */
    protected $endereco;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Collection $atributos, Cliente $cliente)
    {
        $this->atributos = $atributos;
        $this->cliente = $cliente;
        $this->endereco = $cliente->endereco ? $cliente->endereco : new Endereco();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        DB::transaction(
            function () {
                $this->endereco->cliente()->associate($this->cliente);
                $this->endereco->cep = $this->atributos->get('cep');
                $this->endereco->logradouro = $this->atributos->get('logradouro');
                $this->endereco->bairro = $this->atributos->get('bairro');
                $this->endereco->cidade = $this->atributos->get('cidade');
                $this->endereco->numero = $this->atributos->get('numero');
                $this->endereco->uf = $this->atributos->get('uf');

                $this->endereco->save();
            }
        );
    }
}
