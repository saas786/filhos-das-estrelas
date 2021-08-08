<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usuarioMatheus = new \App\Models\User();
        $usuarioMatheus->name = 'Matheus Victor';
        $usuarioMatheus->email = 'vicmatheus99@gmail.com';
        $usuarioMatheus->password = bcrypt('ma@4410.');

        $usuarioMatheus->save();
    }
}
