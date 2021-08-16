<?php

namespace App\Http\Controllers\Servico;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicoController extends Controller
{
    public function index()
    {
        return Inertia::render('Servico/Index');
    }
}
