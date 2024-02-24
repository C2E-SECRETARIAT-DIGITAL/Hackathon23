<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Collation;
use App\Models\Commande;
use App\Models\Equipe;
use App\Models\Hackaton;
use App\Models\Niveau;
use App\Models\Salle;
use Illuminate\Support\Facades\File;
class PdfFileController extends Controller
{
    /*
    {
        'niveauId' => id du niveau dont on veut le fichier pdf
    }
    */
    public function selectedteam(Request $request){

        $hackaton = Hackaton::all()->last();
        $niveau = Niveau::find($request->niveauId) ;
        $equipes = Equipe::where('hackaton_id', $hackaton->id)
                            ->where('statut', 1)
                            ->where('niveau_id', $niveau->id)->get();
        
        $data = [
            'date' => date('d-m-Y à h:i:s A'),
            'niveau' => $niveau->libelle,
            'title' => 'Hackathon',
            'equipes' => $equipes,
            
        ];

        $pdf = \PDF::loadView('pdf.listeEquipes', $data);
    
        return $pdf->download('listeEquipes.pdf');

        // return $pdf->stream('listeEquipes.pdf');

    }
}
