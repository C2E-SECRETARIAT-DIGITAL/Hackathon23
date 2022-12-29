<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Hackaton;
use App\Models\User;
use App\Models\Niveau;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;

class NewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Niveau::create([
            'libelle' => 'Niveau 3 Télécom',
        ]);

        Niveau::create([
            'libelle' => 'Niveau 3 Info',
        ]);

        Niveau::create([
            'libelle' => 'Niveau 3 Sécurité',
        ]);
    }
}
