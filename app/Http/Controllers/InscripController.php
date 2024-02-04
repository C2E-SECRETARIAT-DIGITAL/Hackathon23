<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
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

class InscripController extends Controller
{
    public $errorEmail = false;
    public $errorMatricule = false;

    public $matricule_chef;
    public $matricule_m2;
    public $matricule_m3;


    // Log In
    public function login(Request $request){
        $credentials = request(['email', 'password']);
        if(Auth::attempt($credentials)){
            $user = $request->user();
            $token = $user->createToken('Personal Access Token')->plainTextToken;
            $membres = [];

            foreach (Auth::user()->etudiant->getEquipe()->participants as $participant){
                if ($participant->chef == 1){
                    $participant->etudiant["chef"] = 1;
                }else{
                    $participant->etudiant["chef"] = 0;
                }
                array_push($membres, $participant->etudiant);
            }

            $data = [
                'status' => true,
                'user' => $user,
                'accessToken' => $token,
                'message' => 'Vous êtes conecté(e)',
                'etudiant' => Auth::user()->etudiant ? true : false,
                'equipe' => $membres
            ];

            $response = [
                'data' => $data,
                'statut' => true
            ];

            return response()->json($response);
        }else{
            return response()->json([
                'status' => false,
                'message' => 'Email ou mot de pass incorrect'
            ]);
        }
    }

    // Log Out
    public function logout(Request $request){
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

        if ($request->esatic == 0) {
            $this->matricule_chef = $this->getRandomInt(2) . "-" . $this->classe_chef . $this->getRandomInt(4) . $this->getRandomString(2);
            $this->matricule_m2 = $this->getRandomInt(2) . "-" . $this->classe_m2 . $this->getRandomInt(4) . $this->getRandomString(2);
            $this->matricule_m3 = $this->getRandomInt(2) . "-" . $this->classe_m3 . $this->getRandomInt(4) . $this->getRandomString(2);
        }

        $validate = $this->validate([
            'niveau' => 'required',
            'nom_groupe' => 'required',

            'matricule_chef' => 'required|min:8|unique:etudiants,matricule',
            'nom_chef' => 'required',
            'prenom_chef' => 'required',
            'classe_chef' => 'required',
            'email_chef' => 'required|email|unique:users,email',

            'matricule_m2' => 'required|min:8|unique:etudiants,matricule',
            'nom_m2' => 'required',
            'prenom_m2' => 'required',
            'classe_m2' => 'required',
            'email_m2' => 'required|email|email|unique:users,email',

            'genre_chef' => 'required',
            'genre_m2' => 'required',
            'genre_m3' => 'required',


            'matricule_m3' => 'required|min:8|unique:etudiants,matricule',
            'nom_m3' => 'required',
            'prenom_m3' => 'required',
            'classe_m3' => 'required',
            'email_m3' => 'required|email|email|unique:users,email'

        ]);

        // dd($validate);

        $this->errorEmail = false;

        if (
            $request->email_chef == $request->email_m2 or
            $request->email_chef == $request->email_m3 or
            $request->email_m2 == $request->email_m3
        ) {
            $this->errorEmail = true;
        }

        if (
            $request->matricule_chef == $request->matricule_m2 or
            $request->matricule_chef == $request->matricule_m3 or
            $request->matricule_m2 == $request->matricule_m3
        ) {
            $this->errorMatricule = true;
        }


        if (!$this->errorEmail and !$this->errorMatricule) {

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

            if ($request->esatic == 0){
                $user1 = User::create([
                    'name' => trim($this->matricule_chef),
                    'email' => $request->email_chef,
                    'password' => Hash::make("sdi23@TH12345")
                ]);

                $etudiant1 = Etudiant::create([
                    'nom' => $request->nom_chef,
                    'prenom' => $request->prenom_chef,
                    'matricule' => trim($this->matricule_chef),
                    'genre' => $request->genre_chef,
                    'classe' => $request->esatic == 1 ? Classe::find($request->classe_chef)->libelle : $request->classe_chef,
                    'user_id' => $user1->id
                ]);
            }else{
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


            if ($request->esatic == 0){
                $user2 = User::create([
                    'name' => trim($this->matricule_m2),
                    'email' => $request->email_m2,
                    'password' => Hash::make("sdi23@TH12345")
                ]);

                $etudiant2 = Etudiant::create([
                    'nom' => $request->nom_m2,
                    'prenom' => $request->prenom_m2,
                    'matricule' => trim($this->matricule_m2),
                    'genre' => $request->genre_m2,
                    'classe' => $request->esatic == 1 ? Classe::find($request->classe_m2)->libelle : $request->classe_m2,
                    'user_id' => $user2->id
                ]);
            }else{
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


            if ($request->esatic == 0){
                $user3 = User::create([
                    'name' => trim($this->matricule_m3),
                    'email' => $request->email_m3,
                    'password' => Hash::make("sdi23@TH12345")
                ]);

                $etudiant3 = Etudiant::create([
                    'nom' => $request->nom_m3,
                    'prenom' => $request->prenom_m3,
                    'matricule' => trim($this->matricule_m3),
                    'genre' => $request->genre_m3,
                    'classe' => $request->esatic == 1 ? Classe::find($request->classe_m3)->libelle : $request->classe_m3,
                    'user_id' => $user3->id
                ]);
            }else{
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
                "statut" => true
            ];

            return response()->json($response);
        }
    }

    public function enregistrement_render(Request $request)
    {
        $niveau = [
            "niveau" => Niveau::where('quiz_available', 0)
                ->join('classes', 'niveaux.id', '=', 'classes.niveau_id')
                ->select('niveaux.*', 'classes.libelle as classe_libelle', 'classes.esatic')
                ->where('classes.esatic', 0)
                ->get()
        ];

        

        $data = [
            'niveaux' => $request->esatic == 1 ? Niveau::with("classes")->get() : Niveau::where('quiz_available', 0)->get(),
            'classes' => Classe::where('niveau_id', $request->niveau)->where('esatic', $request->esatic)->get(),

                "niveau" => Niveau::where('quiz_available', 0)
                ->join('classes', 'niveaux.id', '=', 'classes.niveau_id')
                ->select('niveaux.*', 'classes.libelle as classe_libelle', 'classes.esatic')
                ->where('classes.esatic', 0)
                ->get()
        ];

        $response = [
            'data' => $data,
            'status' => true
        ];

        return response()->json($response);
    }
}
