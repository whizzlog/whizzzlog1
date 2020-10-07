<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bank;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $banks = Bank::all();
        
        return view('home',array(
            'banks' => $banks
        ));
        
    }

    public function help(){
        return view('help');
    }
}
