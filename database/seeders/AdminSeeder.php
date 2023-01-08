<?php

namespace Database\Seeders;

use App\Models\Classe;
use App\Models\Hackaton;
use App\Models\User;
use App\Models\Niveau;
use App\Models\Quiz;
use App\Models\Qvideo;
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
        $nvx_q = ['Niveau 1', 'Niveau 2'];
        $nvx_nq = ['Niveau 3 Télécom', 'Niveau 3 Info', 'Niveau 3 Sécurité'];
        $rls = ['Super@Administrateur', 'Administrateur', 'participant'];
        $pms = ['restaurant', 'comite nuit', 'hackaton'];

        $classes = [
            ['SRIT 1A', 'SRIT 1B', 'SRIT 1C', 'SRIT 1D', 'SRIT 1E', 'TWIN 1'],
            ['SRIT 2A', 'SRIT 2B', 'SIGL 2', 'RTEL 2', 'TWIN 2', 'SRIT 3A', 'SRIT 3B', 'SIGL 3', 'RTEL 3', 'TWIN 3', 'DASI'],
            ['MASTER 1 TELECOM', 'MASTER 2 TELECOM', 'Hors ESATIC'],
            ['MASTER 1 INFO', 'MASTER 2 INFO', 'Hors ESATIC'],
            ['MASTER 1 SECURITE', 'MASTER 2 SECURITE', 'Hors ESATIC']
        ];

        foreach ($nvx_q as $nv) {
            Niveau::create([
                'libelle' => $nv,
                'quiz_available' => 1
            ]);
        }

        foreach ($nvx_nq as $nv) {
            Niveau::create([
                'libelle' => $nv,
            ]);
        }

        foreach ($rls as $r) {
            Role::create([
                'name' => $r
            ]);
        }

        foreach ($pms as $p) {
            Role::create([
                'name' => $p
            ]);
        }


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


        foreach (Niveau::where('quiz_available', 1)->get() as $niv) {
            Quiz::create([
                'title' => 'Quiz ' . $niv->libelle,
                'niveau_id' => $niv->id,
            ]);
        }

        foreach (Niveau::where('quiz_available', 0)->get() as $niv) {
            Qvideo::create([
                'niveau_id' => $niv->id,
            ]);
        }



        $i = 0;
        foreach (Niveau::all() as $niv) {
            for ($j = 0; $j < sizeof($classes[$i]); $j++) {
                Classe::create([
                    'libelle' => $classes[$i][$j],
                    'niveau_id' => $niv->id
                ]);
            }
            $i += 1;
        }


        $user->assignRole('Super@Administrateur');
    }
}
