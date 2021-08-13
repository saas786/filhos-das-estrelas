<?php

namespace App\Jobs\Cliente;

use App\Models\Cliente;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class ExcluirClienteJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * @var Cliente
     */
    protected $cliente;

    /**
     * @param Cliente $cliente
     */
    public function __construct(Cliente $cliente)
    {
        $this->cliente = $cliente;
    }

    /**
     * @return Cliente
     */
    public function handle(): Cliente
    {
        return DB::transaction(
            function () {

                if($this->cliente->endereco) {
                    $this->cliente->endereco->delete();
                }

                $this->cliente->delete();

                return $this->cliente;
            }
        );
    }
}
