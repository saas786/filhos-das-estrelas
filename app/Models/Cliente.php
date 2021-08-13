<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $table = 'cliente';

    protected $dates = ['data_nascimento'];

    protected $casts = [
        'data_nascimento' => 'datetime:Y-m-d'
    ];

    public function endereco()
    {
        return $this->hasOne(Endereco::class, 'cliente_id', 'id');
    }
}
