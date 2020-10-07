@extends('layouts.app')

@section('content')
  <div class="row">
          
                  <div class="col-xl-4">
          <div class="card">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">

                  <h5 class="h3 mb-0">Pay With Bitcoins</h5>
                </div>
              </div>
            </div>
            <div class="card-body" style="text-align:center;">
              <!-- Chart -->
              <div class="chart">

                                
<table class="table align-items-center table-flush row"  style="min-width: 100%; left:20px; right:20px;">
                       <tbody>
     <tr>
 <td>

                      <div class="align-items-center">
                        <span class="completion mr-2">Your order is 75% complete</span><br />
                        <div>
                          <div class="align-items-center">
                          <div class="progress" style="min-width: 100%;">
                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
                          </div></div>
                        </div>                       <br /> <span class="completion mr-2">Pay with Bitcoins to complete your order</span>
                      </div> </td></tr></tbody></table>
                    {!! QrCode::size(250)->generate('bitcoin:1A96qq3xUf3o7yMZiMqoP9xEHiY4Qazfj7?amount=0.0875')  !!}



</div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card bg-default">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-1">Amount to pay</h6>
                </div>
                <div class="col">
                  <ul class="nav nav-pills justify-content-end">
                    <li class="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                      </a>
                    </li>
                    <li class="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Chart -->
              <div class="chart">
                <!-- Chart wrapper -->
                         <h4 class="text-white">You are buying {{ ucfirst($log->bank->name).", ".$log->bank->location }} log with a verified balance of ${{ number_format($log->balance) }}.</h4> <br />                       
                           <h4 class="text-white">Bank log price =  {{ "$".number_format($log->price) }}.</h4> 
  <h4 class="text-white">{{ "$".number_format($log->price) }} = {{ $log->price * 0.00009409 }} BTC  </h4>   <br />      <h4 class="text-white">To pay, send 0.0875 BTC to the Bitcoin Address below:</h4> 
  <h4 class="text-white">1A96qq3xUf3o7yMZiMqoP9xEHiY4Qazfj7</h4><br />
  <h4 class="text-white">If you need to view this order again, check <a href="{{ url('/en/myorders') }}" title="My Orders"><span style="color:yellow;   text-decoration: underline;
">My Orders</span> </a></h4>
           </div>
            </div>
          </div>
        </div>
      </div>

@endsection

@section('js')
 {{-- <script src="{{ asset('assets/js/angular.js') }}"></script>
    <script src="{{ asset('assets/js/angular-resource.js') }}"></script>
    <script src="{{ asset('assets/js/angular-route.js') }}"></script>
    <script src="{{ asset('assets/js/app.js') }}"></script>
    <script src="{{ asset('assets/js/angular-qrcode.js') }}"></script>
    <script src="{{ asset('assets/js/vendors.min.js') }}"></script> --}}
@endsection
