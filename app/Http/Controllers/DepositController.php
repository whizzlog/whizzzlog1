<?php

namespace App\Http\Controllers;

use App\Bank;
use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function index(){
         $banks = Bank::all();
        return view('myorders.deposit',array(
            'banks' => $banks
        ));

    }

    public function deposit(){
         $banks = Bank::all();
        return view('deposit',array(
        'banks' => $banks
        ));
    }
}
