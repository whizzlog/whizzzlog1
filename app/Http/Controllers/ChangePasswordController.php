<?php

namespace App\Http\Controllers;

use App\Bank;
use App\Http\Requests\PasswordChange;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends Controller
{
    public function index(){
         $banks = Bank::all();
        return view('user.settings',array(
            'banks' => $banks
        ));
    }

     public function password(PasswordChange $request){

     $upd = auth()->user()->update(array('password' => Hash::make($request->password)));

     if ($upd){
     return redirect()->back()->with('success','Password changed successfully');
     }else{
     return redirect()->back()->with('error','Unable to change password');
     }

     }
}
