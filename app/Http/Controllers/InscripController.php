<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Imports\MatriculesImport;
use Exception;
use App\Models\Equipe;
use App\Models\Etudiant;
use App\Models\Hackaton;
use App\Models\Participant;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;

use App\Models\Classe;
use App\Models\Matricule;
use App\Models\Niveau;
use App\Models\Qsession;
use App\Models\Quiz;
use Livewire\Component;

use Illuminate\Support\Facades\Hash;

class InscripController extends Controller
{
    public $errorEmail = false;
    public $errorMatricule = false;

    public $matricule_chef;
    public $matricule_m2;
    public $matricule_m3;


    // Log In
    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);
        if (Auth::attempt($credentials)) {
            $user = $request->user();
            $token = $user->createToken('Personal Access Token')->plainTextToken;

            $data = [
                'status' => true,
                'role' => Auth::user()->etudiant ? "participant" : "admin",
                'user' => $user,
                'accessToken' => $token,
                'message' => 'Vous êtes connecté(e)'
            ];

            $response = [
                'data' => $data,
                'status' => true
            ];

            return response()->json($response);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Email ou mot de pass incorrect'
            ]);
        }
    }

    // Log Out
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        $response = [
            'message' => 'Successfully logged out',
            'status' => true
        ];

        return response()->json($response);
    }

    public function inscription()
    {
        $hackaton = Hackaton::latest()->first();
        $statut =  Hackaton::latest()->first()->CanRecord();

        $data = [
            'hackaton_inscription' => $hackaton->inscription,
            'statut' => $statut
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function inscriptionterminer()
    {
        $hackaton = Hackaton::latest()->first();

        $data = [
            'hackaton_inscription' => $hackaton->inscription
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function getRandomInt($n)
    {
        $characters = '0123456789';
        $randomString = '';

        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        return $randomString;
    }

    public function getRandomString($n)
    {
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';

        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        return $randomString;
    }

    public function participants_enregistrement_createEquipe(Request $request)
    {
        if (
            isset($request->nom_groupe) and
            isset($request->photo_groupe) and
            isset($request->niveau) and
            isset($request->email_chef) and
            isset($request->nom_chef) and
            isset($request->prenom_chef) and
            isset($request->genre_chef) and
            isset($request->classe_chef) and
            isset($request->esatic) and
            isset($request->email_m2) and
            isset($request->nom_m2) and
            isset($request->prenom_m2) and
            isset($request->genre_m2) and
            isset($request->classe_m2) and
            isset($request->email_m3) and
            isset($request->nom_m3) and
            isset($request->prenom_m3) and
            isset($request->genre_m3) and
            isset($request->classe_m3)
        ) {
            $errorEmail = false;
            $errorMatricule = false;
            $matricule_chef = "";
            $matricule_m2 = "";
            $matricule_m3 = "";

            if ($request->esatic == 0) {
                $matricule_chef = $this->getRandomInt(2) . "-" . $request->classe_chef . $this->getRandomInt(4) . $this->getRandomString(2);
                $matricule_m2 = $this->getRandomInt(2) . "-" . $request->classe_m2 . $this->getRandomInt(4) . $this->getRandomString(2);
                $matricule_m3 = $this->getRandomInt(2) . "-" . $request->classe_m3 . $this->getRandomInt(4) . $this->getRandomString(2);
            }

            if (
                $request->email_chef == $request->email_m2 or
                $request->email_chef == $request->email_m3 or
                $request->email_m2 == $request->email_m3
            ) {
                $errorEmail = true;
            }

            if ($request->esatic == 0) {
                if (
                    $matricule_chef == $matricule_m2 or
                    $matricule_chef == $matricule_m3 or
                    $matricule_m2 == $matricule_m3
                ) {
                    $errorMatricule = true;
                }
            }

            if (!$errorEmail and !$errorMatricule) {

                // recuperation de l'hackaton

                $hackaton = Hackaton::latest()->first();

                // creation de l'équipe
                $equipe = Equipe::create([
                    'nom' => $request->nom_groupe,
                    'logo' => $request->photo_groupe,
                    'niveau_id' => $request->niveau,
                    'hackaton_id' => $hackaton->id
                ]);



                if (Niveau::find($request->niveau)->quiz_available == 1) {
                    Qsession::create([
                        'quiz_id' => Quiz::where('niveau_id', $request->niveau)->first()->id,
                        'equipe_id' => $equipe->id
                    ]);
                }
                // creation du participant 1

                if ($request->esatic == 0) {
                    $user1 = User::create([
                        'name' => trim($matricule_chef),
                        'email' => $request->email_chef,
                        'password' => Hash::make("sdi23@TH12345")
                    ]);

                    $etudiant1 = Etudiant::create([
                        'nom' => $request->nom_chef,
                        'prenom' => $request->prenom_chef,
                        'matricule' => trim($matricule_chef),
                        'genre' => $request->genre_chef,
                        'classe' => $request->esatic == 1 ? Classe::find($request->classe_chef)->libelle : $request->classe_chef,
                        'user_id' => $user1->id
                    ]);
                } else {
                    $user1 = User::create([
                        'name' => trim($request->matricule_chef),
                        'email' => $request->email_chef,
                        'password' => Hash::make("sdi23@TH12345")
                    ]);

                    $etudiant1 = Etudiant::create([
                        'nom' => $request->nom_chef,
                        'prenom' => $request->prenom_chef,
                        'matricule' => trim($request->matricule_chef),
                        'genre' => $request->genre_chef,
                        'classe' => $request->esatic == 1 ? Classe::find($request->classe_chef)->libelle : $request->classe_chef,
                        'user_id' => $user1->id
                    ]);
                }


                // creation du participant 2 


                if ($request->esatic == 0) {
                    $user2 = User::create([
                        'name' => trim($matricule_m2),
                        'email' => $request->email_m2,
                        'password' => Hash::make("sdi23@TH12345")
                    ]);

                    $etudiant2 = Etudiant::create([
                        'nom' => $request->nom_m2,
                        'prenom' => $request->prenom_m2,
                        'matricule' => trim($matricule_m2),
                        'genre' => $request->genre_m2,
                        'classe' => $request->esatic == 1 ? Classe::find($request->classe_m2)->libelle : $request->classe_m2,
                        'user_id' => $user2->id
                    ]);
                } else {
                    $user2 = User::create([
                        'name' => trim($request->matricule_m2),
                        'email' => $request->email_m2,
                        'password' => Hash::make("sdi23@TH12345")
                    ]);

                    $etudiant2 = Etudiant::create([
                        'nom' => $request->nom_m2,
                        'prenom' => $request->prenom_m2,
                        'matricule' => trim($request->matricule_m2),
                        'genre' => $request->genre_m2,
                        'classe' => $request->esatic == 1 ? Classe::find($request->classe_m2)->libelle : $request->classe_m2,
                        'user_id' => $user2->id
                    ]);
                }


                // creation du participant 3 


                if ($request->esatic == 0) {
                    $user3 = User::create([
                        'name' => trim($matricule_m3),
                        'email' => $request->email_m3,
                        'password' => Hash::make("sdi23@TH12345")
                    ]);

                    $etudiant3 = Etudiant::create([
                        'nom' => $request->nom_m3,
                        'prenom' => $request->prenom_m3,
                        'matricule' => trim($matricule_m3),
                        'genre' => $request->genre_m3,
                        'classe' => $request->esatic == 1 ? Classe::find($request->classe_m3)->libelle : $request->classe_m3,
                        'user_id' => $user3->id
                    ]);
                } else {
                    $user3 = User::create([
                        'name' => trim($request->matricule_m3),
                        'email' => $request->email_m3,
                        'password' => Hash::make("sdi23@TH12345")
                    ]);

                    $etudiant3 = Etudiant::create([
                        'nom' => $request->nom_m3,
                        'prenom' => $request->prenom_m3,
                        'matricule' => trim($request->matricule_m3),
                        'genre' => $request->genre_m3,
                        'classe' => $request->esatic == 1 ? Classe::find($request->classe_m3)->libelle : $request->classe_m3,
                        'user_id' => $user3->id
                    ]);
                }

                // enregistrement des participants

                Participant::create([
                    'chef' => true,
                    'etudiant_id' => $etudiant1->id,
                    'equipe_id' => $equipe->id,
                    'hackaton_id' => $hackaton->id
                ]);

                Participant::create([
                    'etudiant_id' => $etudiant2->id,
                    'equipe_id' => $equipe->id,
                    'hackaton_id' => $hackaton->id
                ]);

                Participant::create([
                    'etudiant_id' => $etudiant3->id,
                    'equipe_id' => $equipe->id,
                    'hackaton_id' => $hackaton->id
                ]);

                //  $this->resetInput();

                $response = [
                    "messsage" => "Enregiistrement effectué !",
                    "status" => true
                ];

                return response()->json($response);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Complètez tous les champs !'
            ]);
        }
    }

    public function enregistrement_render(Request $request)
    {
        $data = [
            'niveaux' => $request->esatic == 1 ? Niveau::with(['classes' => function ($query) {
                $query->where('esatic', 1);
            }])->get() : Niveau::where("id", ">", 3)->with(['classes' => function ($query) {
                $query->where('esatic', 0);
            }])->get(),
        ];

        $response = [
            'data' => $data,
            'status' => true
        ];

        return response()->json($response);
    }
}
