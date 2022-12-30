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

        $n1 = Niveau::create([
            'libelle' => 'Niveau 1',
        ]);

        $n2 = Niveau::create([
            'libelle' => 'Niveau 2',
        ]);

        $n3 = Niveau::create([
            'libelle' => 'Niveau 3 Télécom',
        ]);

        $n4 = Niveau::create([
            'libelle' => 'Niveau 3 Info',
        ]);

        $n5 = Niveau::create([
            'libelle' => 'Niveau 3 Sécurité',
        ]);



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
