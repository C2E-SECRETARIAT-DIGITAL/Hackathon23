<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ParticipantsController extends Controller
{
    public $errorEmail = false;
    public $errorMatricule = false;

    public $matricule_chef;
    public $matricule_m2;
    public $matricule_m3;

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

    public function enregistrement_createEquipe(Request $request)
    {

        if ($request->esatic == 0) {
            $this->matricule_chef = $this->getRandomInt(2) . "-" . $this->classe_chef . $this->getRandomInt(4) . $this->getRandomString(2);
            $this->matricule_m2 = $this->getRandomInt(2) . "-" . $this->classe_m2 . $this->getRandomInt(4) . $this->getRandomString(2);
            $this->matricule_m3 = $this->getRandomInt(2) . "-" . $this->classe_m3 . $this->getRandomInt(4) . $this->getRandomString(2);
        }

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

    public function part_render()
    {

        $data = [
            'etudiants' => Etudiant::all(),
            'equipes' => Equipe::all()
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function part_add(Request $request){

        Participant::create([
            'etudiant_id' => $request->etudiant_id,
            'equipe_id' => $request->equipe_id,
            'hackaton_id' => Hackaton::latest()->first()->id,
            'chef' => $request->chef == 1 ? true : false
        ]);

        $response = [
            'message' => 'participant ajouté !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function part_putChef(Request $request){
        $pa = Participant::where('etudiant_id', $request->etudiant_id)->first();
        $pa->chef = true;
        $pa->save();

        $response = [
            'message' => 'chef crée !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function part_create(Request $request){
        $u = User::where('email', $request->email)->first();

        Etudiant::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'matricule' => $u->name,
            'classe' => $request->classe,
            'genre' => 'Masculin',
            'user_id' => $u->id
        ]);

        $response = [
            'message' => 'Participant crée !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function part_openSession(Request $request){
        $qs = Qsession::where('equipe_id', $request->equipe_id)->first();

        $qs->state = 0;
        $qs->score = 0;
        $qs->save();

        $response = [
            'message' => 'Session ouverte !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function quiz_render()
    {
        $data = [
            'quiz' => Auth::user()->etudiant->getEquipe()->qsession->quiz
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function quiz_openSession()
    {
        $ss = Auth::user()->etudiant->getEquipe()->qsession;
        $ss->state = 1;
        $ss->save();
    }

    public function moveQuestion($n)
    {
        $qq = Auth::user()->etudiant->getEquipe()->qsession->quiz->questions;

        if($this->current_index + $n == sizeof($qq) -1){
            $this->next = false;
        }else{
            $this->next = true;
        }

        if ($this->current_index + $n == sizeof($qq)) {
            return redirect()->to('/preselection');
        }

        $this->current_index += $n;
    }

    public function storeAnswers()
    {
        $ss = Auth::user()->etudiant->getEquipe()->qsession;
        $st = Auth::user()->etudiant->getEquipe()->qsession->quiz->questions[$this->current_index];
        $responses = QsessionResponse::where('qsession_id', $ss->id)->where('question_id', $st->id)->get();

        $sc = 0;

        foreach ($responses as $response) {

            if ($this->sponses) {
                if (array_key_exists($response->response_id, $this->sponses)) {

                    if ($this->sponses[$response->response_id] == true) {
                        $response->state = 1;
                        $response->save();
                        $sc += $response->score;
                    } else {
                        $response->state = 0;
                        $response->save();
                    }
                } else {
                    $response->state = 0;
                    $response->save();
                }
            }
        }

        if ($sc < 0)
            $sc = 0;

        $this->score += $sc;
        $ss->score = $this->score;
        if ($ss->score == 0)
            $ss->score = 1;

        $ss->save();
    }

    public function storeAndMove($n)
    {
        $this->storeAnswers();
        $this->moveQuestion($n);
    }

    public function storeAndExit()
    {
        $this->storeAnswers();
    }
}
