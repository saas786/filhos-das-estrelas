<?php

namespace App\Queries\Cliente;

use App\Models\Cliente;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;

class ListaClientesQuery
{

    /**
     * @var Collection
     */
    private $atributos;

    /**
     * @var \Illuminate\Database\Eloquent\Builder
     */
    private $query;

    /**
     * @param Request $request
     */
    public function __construct(Collection $atributos)
    {
        $this->atributos = $atributos;
        $this->query = Cliente::select(
            [
                'id',
                'nome',
                'genero',
                DB::raw('DATE_FORMAT(data_nascimento, "%d/%m/%Y") as nascimento'),
                DB::raw('TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) as idade')
            ]
        );
    }

    /**
     * @return Builder
     */
    public function filtroNome(): Builder
    {
        return $this->query->where('nome', 'like', '%'.$this->atributos->get('nome').'%');
    }

    /**
     * @return Builder
     */
    public function filtroDataNascimento(): Builder
    {
        return $this->query->whereDate('data_nascimento', '>=', $this->atributos->get('data_nascimento'));
    }

    /**
     * @return Builder
     */
    public function getQuery(): Builder
    {
        if ($this->atributos->get('nome')) {
            $this->filtroNome();
        }

        if ($this->atributos->get('data_nascimento')) {
            $this->filtroDataNascimento();
        }

        return $this->query;
    }
}
