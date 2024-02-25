<?php

namespace App\Http\Controllers;

use App\Imports\MatriculesImport;
use Exception;
use App\Models\Repa;
use App\Models\Equipe;
use App\Models\Commande;
use App\Models\Etudiant;
use App\Models\Hackaton;
use App\Models\Collation;
use App\Mail\ResultatEmail;
use App\Models\Participant;
use App\Models\Restauration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;
use Maatwebsite\Excel\Facades\Excel;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class AdminController extends Controller
{

    public function welcome()
    {
        $hackaton = Hackaton::where('inscription', 1)->first();
        $statut =  $hackaton->inscription;

        // dd($hackaton);
        return view('acceuil', compact('statut'));
        // if ($hackaton->inscription) {
        //     return view('acceuil', compact('statut'));
        // }
        // else {
        //     return view('participants.encours');
        // }
    }


    public function inscription()
    {
        $hackaton = Hackaton::where('inscription', 1)->first();
        $statut =  Hackaton::where('inscription', 1)->first()->canRecord();

        if ($hackaton->inscription and $statut) {
            return view('participants.inscription');
        } else {
            return redirect()->route('welcome');
        }
    }

    public function finPreselection()
    {
        return view('participants.FinInsciption');
        // if ($hackaton->inscription) {

        //     return view('participants.FinInsciption');
        // } else {
        //     return redirect()->route('welcome');
        // }
    }

    public function inscriptionterminer()
    {
        $hackaton = Hackaton::where('inscription', 1)->first();

        if ($hackaton->inscription) {

            return view('terminer');
        } else {
            return redirect()->route('welcome');
        }
    }

    public function index()
    {
        return view('Admin.parametrage');
    }

    public function selectionGroupe()
    {
        return view('Admin.selection');
    }

    public function impression()
    {
        return view('Admin.impression');
    }



    public function restauration()
    {
        if (Auth::user()->etudiant->currentEquipe()->statut) {
            $etudiant = Etudiant::where('user_id', Auth::user()->id)->first();

            $collations = Collation::all();

            $m = Crypt::encryptString($etudiant->matricule);
            $t = Crypt::decryptString($m);
            //$qr = base64_encode(QrCode::format('svg')->size(250)->errorCorrection('H')->generate($m));

            $qrcode = QrCode::size(300)->generate($m);
            return view('participants.restauration', compact('qrcode', 'collations'));
        } else {
            return redirect()->route('welcome');
        }
    }

    public function getCommandes(Request $request)
    {
        $equipe = Auth::user()->etudiant->getEquipe();
        $monequipe =  Equipe::find($equipe->id);

        $participant = Participant::find($request->id);

        Commande::create([
            'etudiant_id' => $participant->etudiant_id,
            'salle_id' => $monequipe->currentSalle()->id,
            'collation_id' => $request['collation_etu' . $participant->id . '_id']
        ]);

        return redirect()->back();
    }


    public function gestionRestaurant()
    {
        $repas = Repa::orderBy('created_at', 'DESC')->get();

        $hackaton = Hackaton::where('inscription', 1)->first();

        $nb_participants = DB::table('participants')
            ->join('equipes', 'equipes.id', '=', 'participants.equipe_id')
            ->where('equipes.hackaton_id', $hackaton->id)
            ->where('equipes.statut', 1)
            ->get()
            ->count();

        return view('Admin.commande', compact('repas', 'nb_participants'));
    }


    public function Soumission(Request $request)
    {
        $codeDecrypte = Crypt::decryptString($request->qrcodeValue);

        $etudiant = Etudiant::where('matricule', $codeDecrypte)->first();

        if (Repa::latest()->first()) {

            $statut = Restauration::where('etudiant_id', $etudiant->id)
                ->where('repa_id', Repa::latest()->first()->id)
                ->where('hackaton_id', Hackaton::where('inscription', 1)->first()->id)
                ->first();

            if (!$statut) {
                Restauration::create([
                    'etudiant_id' => $etudiant->id,
                    'repa_id' => Repa::latest()->first()->id,
                    'hackaton_id' => Hackaton::where('inscription', 1)->first()->id
                ]);

                $request->session()->flash('success', 'Bon appetit');
            } else {
                $request->session()->flash('error', 'Déjà restauré');
            }
        } else {
            $request->session()->flash('error', 'Veillez enregistrer le repas');
        }

        return redirect()->back();
    }

    public function sendEmail(string $email, string $nom, string $equipe)
    {
        $maildata = [
            'title' => 'Technovore Hackathon 2023',
            'nom' => $nom,
            'equipe' => $equipe
        ];

        Mail::to($email)->send(new ResultatEmail($maildata));
    }


    public function ContacterLesChefs(Request $request)
    {

        $equipe = Equipe::find($request->id);

        $chef_id = $equipe->participants()->first()->etudiant_id;

        if ($chef_id) {
            $chef = Etudiant::find($chef_id);

            $equipe = $chef->currentEquipe()->nom;
            $nom = $chef->nom . ' ' . $chef->prenom;
            $email = $chef->user->email;

            // $this->sendEmail($email, $nom, $equipe);

            try {
                $this->sendEmail($email, $nom, $equipe);
            } catch (Exception $e) {
                if (env("APP_ENV") == "local") {

                    request()->session()->flash('danger', 'Envoi du mail impossible');
                }
            }
        }

        return redirect()->back();
    }

    public function importMatricule(Request $request)
    {
        Excel::import(new MatriculesImport, $request->file('file')->store('files'));
        return redirect()->back();
    }

    public function participantAddView()
    {

        return view('participantAdd');
    }
}
