<?php

namespace App\Jobs\Atendente;

use App\Models\Atendente;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class SalvarAtendenteJob implements ShouldQueue
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
     * @var Atendente
     */
    private $atendente;

    /**
     * @param Collection $atributos
     * @param Atendente $atendente
     */
    public function __construct(Collection $atributos, Atendente $atendente = null)
    {
        $this->atributos = $atributos;
        $this->atendente = $atendente ?? new Atendente();
    }

    /**
     * @return Atendente
     */
    public function handle(): Atendente
    {
        return DB::transaction(
            function () {
                $this->atendente->nome = $this->atributos->get('nome');
                $this->atendente->genero = $this->atributos->get('genero');
                $this->atendente->data_nascimento = $this->atributos->get('data_nascimento');

                $this->atendente->save();

                return $this->atendente;
            }
        );
    }
}
