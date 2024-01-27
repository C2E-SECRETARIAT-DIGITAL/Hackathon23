<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Hackaton as ModelsHackaton;
use Livewire\WithPagination;



class ParametrageController extends Controller
{
    public function hackaton_render()
    {
        $data = [
            'hackatons' => ModelsHackaton::orderBy('created_at', 'DESC')
                                    ->paginate(4)
        ];
        
        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function hackaton_createHackaton(Request $request)
    {
        // $this->validate([
        //     'pco_1' => 'required',
        //     'annee' => 'required|min:4'
        // ]);
        
        if ($request->pco_1 && $request->pco_2 && $request->annee)
        {
            ModelsHackaton::create([
                'pco_1' => $request->pco_1,
                'pco_2' => $request->pco_2,
                'annee' => $request->annee
            ]);
    
            $response = [
                'message' => 'ModelsHackaton crée !',
                'statut' => true
            ];
    
            return response()->json($response);
        }

        $response = [
            'message' => 'Aucune donée reçue',
            'statut' => false
        ];

        return response()->json($response);
    }


    public function hackaton_activation(Request $request)
    {
        // dd($id);
        if($request->id)
        {
            $hackaton = ModelsHackaton::find($request->id);

            $hackaton->inscription = !$hackaton->inscription ;

            $hackaton->save();

            $response = [
                'message' => 'Inscription réussie !',
                'statut' => true
            ];
    
            return response()->json($response);
        }

        $response = [
            'message' => 'Echec de l\'inscription. $id null',
            'statut' => false
        ];

        return response()->json($response);
    }

    public function niveau_render()
    {
        $data = [
            'niveaux' => ModelsNiveau::all(),
            'classes' => Classe::orderBy('created_at', 'DESC')->paginate(6)
        ];
        
        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function niveau_createClasse(Request $request)
    {
        // $this->validate([
        //     'libelle' => 'required|min:4',
        //     'niveau_id' => 'required'
        // ]);

        if ($request->libelle && $request->niveau_id)
        {
            Classe::create([
                'libelle' => $request->libelle,
                'niveau_id' => $request->niveau_id
            ]);
    
            $response = [
                'message' => 'Classe créée !',
                'statut' => true
            ];
    
            return response()->json($response);
        }

        $response = [
            'message' => 'Classe non créée ! Aucune données reçues.',
            'statut' => false
        ];

        return response()->json($response);

    }

    public function niveau_editClasse(Request $request)
    {
        $classe = Classe::find($request->id);

        $data = [
            'libelle' => $classe->libelle,
            'niveau_id' => $classe->niveau->id,
            'classe_id' =>  $classe->id,
            'edit_mode' => true,
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function niveau_updateClasse(Request $request)
    {
        // $this->validate([
        //     'libelle' => 'required|min:4',
        //     'niveau_id' => 'required'
        // ]);

        if ($request->id && $request->libelle && $request->niveau_id)
        {
            $classe = Classe::find($request->id);

            $classe->update([
                'libelle' => $request->libelle,
                'niveau_id' => $request->niveau_id
            ]);
    
            $response = [
                'message' => 'Classe modifiée !',
                'statut' => true
            ];
    
            return response()->json($response);
        }

        $response = [
            'message' => 'Classe non modifiée ! Aucune données reçues',
            'statut' => false
        ];

        return response()->json($response);
    }

    public function niveau_deleteClasse(Request $request)
    {
        if($request->id)
       {
            $classe = Classe::find($request->id);
            $classe->delete();

            $response = [
                'message' => 'Classe supprimée !',
                'statut' => true
            ];

            return response()->json($response);
        }
        
    }

    public function preselection_render()
    {
        $data = [
            'quiz' => Quiz::where('niveau_id', $this->niveau)->first(),
            'qvideo' => Qvideo::where('niveau_id', $this->niveau)->first(),
            '_niveau' => Niveau::find($this->niveau),
            'quizzes' => Quiz::all(),
            'questions' => Quiz::where('niveau_id', $this->niveau)->first() != null ? Question::where('quiz_id', Quiz::where('niveau_id', $this->niveau)->first()->id)->orderBy('created_at', 'desc')->get() :  [],
            'niveaux' => Niveau::all()
        ];
        
        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function preselection_updateQuiz(Request $request)
    {
        $qi = Quiz::find($request->qid);

        $qi->score = $this->quiz_score;
        $qi->save();

        $response = [
            'message' => ' Score Enregistré !',
            'statut' => true
        ];

        return response()->json($response);

    }

    public function preselection_storeNewQuestion()
    {

        Question::create([
            'content' => $this->newQuestion,
            'quiz_id' => Quiz::where('niveau_id', $this->niveau)->first()->id,
        ]);

        $response = [
            'message' => 'Question enregistrée !',
            'statut' => true
        ];

        return response()->json($response);

    }

    public function preselection_updateQuestion(Request $request)
    {
        $que = Question::find($request->que_id);
        $que->content = $request->newQuestion;
        $que->save();

        $response = [
            'message' => 'Question modifiée !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function preselection_deleteQuestion(Request $request)
    {

        $que = Question::find($request->qid);
        $que->delete();

        $response = [
            'message' => 'Question supprimée !',
            'statut' => true
        ];

        return response()->json($response);

    }

    public function preselection_storeNewResponse(Request $request)
    {
        $r = Response::create([
            'content' => $request->newResponseC[$request->qid],
            'score' => $request->newResponseS[$request->qid],
            'question_id' => $request->qid
        ]);

        foreach (Quiz::where('niveau_id', $request->niveau)->first()->qsessions as $qs) {
            QsessionResponse::create([
                'score' => $r->score,
                'state' => 0,
                'qsession_id' => $qs->id,
                'response_id' => $r->id,
                'question_id' => $r->question_id
            ]);
        }

        $response = [
            'message' => 'Réponse crée !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function preselection_updateResponse(Request $request)
    {
        $res = Response::find($request->resp_id);
        $res->content = $request->newResponseC[$request->qid];
        $res->score = $request->newResponseS[$request->qid];
        $res->save();

        foreach (Quiz::where('niveau_id', $request->niveau)->first()->qsessions as $qs) {
            $qsres = QsessionResponse::where('qsession_id', $qs->id)->where('response_id', $this->resp_id)->where('question_id', $res->question_id)->first();
            $qsres->score = $res->score;
            $qsres->save();
        }

        $response = [
            'message' => 'Réponse modifiée !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function preselection_deleteResponse(Request $request)
    {
        $res = Response::find($request->rid);
        $res->delete();

        $response = [
            'message' => 'Réponse supprimée !',
            'statut' => true
        ];

        return response()->json($response);
    }

    public function preselection_openCloseQuiz(Request $request)
    {
        $q = Quiz::find($request->qid);

        if ($q->state == 1){
            $q->state = 0;
            $response = [
                'message' => 'Quiz fermé !',
                'statut' => true
            ];
        }else{
            $q->state = 1;
            $response = [
                'message' => 'Quiz ouvert !',
                'statut' => true
            ];
        }
        $q->save();

        return response()->json($response);
    }

    public function preselection_openCloseQvideo(Request $request)
    {
        $q = Qvideo::find($request->qid);

        if ($q->state == 1)
        {
            $q->state = 0;
            $response = [
                'message' => 'Qvideo fermé !',
                'statut' => true
            ];
        }
        else
        {
            $q->state = 1;
            $response = [
                'message' => 'Quiz ouvert !',
                'statut' => true
            ];
        }

        $q->save();

        return response()->json($response);
    }

    public function repartition_render()
    {
        $hackaton = Hackaton::latest()->first() ;
        
        $data = [
            'equipes' => Equipe::where('statut',1 )
                                ->where('hackaton_id', $hackaton->id)
                                ->paginate(6)   ,

            'salles' => Salle::all(),

            'repartitions' => RepSalle::where('hackaton_id', $hackaton->id)
                                ->orderBy('created_at', 'DESC')
                                ->paginate(6)
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);

    }

    public function repartition_linkRepartition(Request $request)
    {
        $hackaton = Hackaton::latest()->first() ;

        if($request->salle_id != '')
        {
          
            RepSalle::create([
                'equipe_id' => $request->id,
                'hackaton_id' => $hackaton->id,
                'salle_id' => $request->salle_id
            ]);

            $response = [
                'message' => 'Repartition enregistrée',
                'statut' => true
            ];
    
            return response()->json($response);
    

        }

        $response = [
            'message' => 'Repartition non enregistrée',
            'statut' => true
        ];

        return response()->json($response);

    }

    public function deleteRepartition(Request $request)
    {
        if($request->id)
        {
            $hackaton = Hackaton::latest()->first() ;
            $classe = RepSalle::where('equipe_id', $request->id)
                                ->where('hackaton_id', $hackaton->id)
                                ->first();
            $classe->delete();

            $response = [
                'message' => 'Repartition supprimée',
                'statut' => true
            ];
    
            return response()->json($response);
    
        }

        $response = [
            'message' => 'Repartition non supprimée',
            'statut' => true
        ];

        return response()->json($response);

    }
}
