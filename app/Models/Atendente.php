<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atendente extends Model
{
    use HasFactory;

    protected $table = 'atendente';

    public function servicos()
    {
        return $this->belongsToMany(Servico::class, 'atendente_servico', 'atendente_id', 'servico_id');
    }
}
