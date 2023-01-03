<?php

namespace Database\Seeders;

use App\Models\Hackaton;
use App\Models\User;
use App\Models\Niveau;
use App\Models\Quiz;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // Creation des differents Niveaux
        $nvx = ['Niveau 1', 'Niveau 2', 'Niveau 3 Télécom', 'Niveau 3 Info', 'Niveau 3 S"curité'];

        foreach($nvx as $nv)
        {
            Niveau::create([
                'libelle' => $nv
            ]);
        }

        Role::create(['name'=> 'Super@Administrateur']);
        Role::create(['name'=> 'Administrateur']);
        Role::create(['name'=> 'participant']);

        Permission::create(['name' => 'restaurant']);
        Permission::create(['name' => 'comite nuit']);
        Permission::create(['name' => 'hackaton']);


        $user = User::create([
            'name' => 'Administrateur',
            'email' => 'adminHackaton@C2E.com',
            'password' => Hash::make("11111111")
        ]);

        Hackaton::create([
            'pco_1' => 'N\'DA Regis Richmond',
            'pco_2' => 'DJE BI Mointi Jean Patrice',
            'annee' => '2022'
        ]);

        $h = Hackaton::create([
            'pco_1' => 'BLE Yatana',
            'pco_2' => 'PRESIDENT Daniel',
            'annee' => '2023',
            'inscription' => 1
        ]);

        foreach(Niveau::all() as $niv){
            Quiz::create([
                'title' => 'Quiz ' . $niv->libelle,
                'niveau_id' => $niv->id,
                'hackaton_id' => $h->id
            ]);
        }

       
        $user->assignRole('Super@Administrateur') ;
        
    }
}
