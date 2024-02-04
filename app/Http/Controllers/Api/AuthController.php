<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    // Log In
    public function login(Request $request){
        $credentials = request(['email', 'password']);
        if(Auth::attempt($credentials)){
            $user = $request->user();
            $token = $user->createToken('Personal Access Token')->plainTextToken;
            return response()->json([
                'status' => true,
                'user' => $user,
                'accessToken' => $token,
                'message' => 'Vous êtes conecté(e)'
            ]);
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
        return response()->json([
            'status' => true,
            'message' => 'Successfully logged out'
        ]);
    }
}