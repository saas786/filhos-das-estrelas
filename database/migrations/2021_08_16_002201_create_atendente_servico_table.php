<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtendenteServicoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atendente_servico', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('atendente_id');
            $table->foreign('atendente_id')->references('id')->on('atendente');
            $table->unsignedBigInteger('servico_id');
            $table->foreign('servico_id')->references('id')->on('servico');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('atendente_servico');
    }
}
