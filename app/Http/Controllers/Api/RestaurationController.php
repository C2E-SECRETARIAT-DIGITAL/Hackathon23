<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Salle;
use Livewire\Component;
use App\Models\Collation;
use App\Models\Commande as ModelsCommande;
use Illuminate\Support\Facades\DB;

use App\Models\Repa;
use Livewire\WithPagination;

class RestaurationController extends Controller
{
    public function commande_render()
    {
        $data = [
            'salles' => Salle::paginate(10),
            'collations' => Collation::all()
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function commande_deleteAllCommande()
    {
        ModelsCommande::truncate();

        request()->session()->flash('success', 'Suppression effectuée');
    }

    public function repas_render()
    {
        $data = [
            'repas' => Repa::orderBy('created_at', 'DESC')->paginate(6),
            'collations' => Collation::orderBy('created_at', 'DESC')->paginate(6)
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function repas_createRepas(Request $request)
    {

        Repa::create([
            'libelle' => $this->request
        ]);

        $response = [
            'message' => "Repas ajouté !",
            'statut' => true
        ];

        return response()->json($response);
    }

    public function repas_createCollation(Request $request)
    {

        Collation::create([
            'libelle' => $request->libelle_col
        ]);

        $response = [
            'message' => "Collation ajoutée !",
            'statut' => true
        ];

        return response()->json($response);
    }

    public function repas_deleteRepas(Request $request)
    {
        if($request->id)
       {
           
           $rep = Repa::find($request->id);
           $rep->delete();

           $response = [
            'message' => "Repas supprimé !",
            'statut' => true
            ];

            return response()->json($response);
       }

       $response = [
        'message' => "Repas non supprimé ! id non trouvé",
        'statut' => false
        ];

        return response()->json($response);
        
    }

    public function repas_deleteCollation(Request $request)
    {
        if($request->id)
       {
           
           $col = Collation::find($request->id);
           $col->delete();

           $response = [
            'message' => "Collation supprimée !",
            'statut' => true
            ];

            return response()->json($response);
       }

       $response = [
        'message' => "Collation non supprimée ! id non trouvé",
        'statut' => true
        ];

        return response()->json($response);
        
    }

    public function salle_render()
    {
        $data = [
            'salles' => ModelsSalle::orderBy('created_at', 'DESC')->paginate(6)
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function salle_createsalle(Request $request)
    {

        ModelsSalle::create([
            'libelle' => $request->libelle,
            'nb_equipe' => $request->nb_equipe
        ]);

        $response = [
            'message' => "Salle crée !",
            'statut' => true
        ];

        return response()->json($response);
    }

    public function salle_editsalle(Request $request)
    {
        $salle = ModelsSalle::find($request->id);

        $data = [
            "libelle" => $salle->libelle,
            "nb_equipe" => $salle->nb_equipe,
            "salle_id" => $request->id,
            "edit_mode" => true 
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function salle_updatesalle(Request $request)
    {
        $salle = ModelsSalle::find($request->id);

       
        $salle->update([
            'libelle' => $request->libelle,
            'nb_equipe' => $request->nb_equipe,
            'edit_mode' => false
        ]);
      
        $response = [
            'message' => "Salle maj !",
            'statut' => true
        ];

        return response()->json($response);
    }

    public function salle_deletesalle(Request $request)
    {
        if($request->id)
        {
            
            $classe = ModelsSalle::find($request->id);
            $classe->delete();

            $response = [
                'message' => "Salle supprimée !",
                'statut' => true
            ];
    
            return response()->json($response);
        }

        $response = [
            'message' => "Salle nom suprimée ! id non trouvé",
            'statut' => true
        ];

        return response()->json($response);
        
    }
}
