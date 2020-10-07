@extends('layouts.app')

@section('content')
 <div class="row">
        <div class="col">
          <div class="card bg-default shadow">
            <div class="card-header bg-transparent border-0">
              <h3 class="text-white mb-0">Verified Bank Logs</h3>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-dark table-flush">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Bank Name</th>
                    <th scope="col" class="sort" data-sort="budget">Balance</th>
                    <th scope="col" class="sort" data-sort="status">BTC Compatible</th>
                    <th scope="col">Price</th>
                    <th scope="col" class="sort" data-sort="completion"></th>
                  </tr>
                </thead>
                
                @foreach ($banklogs as  $log)
                     <tbody class="list">
                  <form  action="{{ route('log.pay') }}" method="post">
                    @csrf
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset($log->bank->image_url) }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">{{ ucfirst($log->bank->name.", ".$log->bank->location) }}</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                     {{ "$".number_format($log->balance)." USD" }}
                    </td>
                    <td>
                        @if($log->btc_compatible === "yes")
                         <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">{{ ucfirst($log->btc_compatible) }}</span>
                      </span>
                        @elseif($log->btc_compatible === "no")
                         <span class="badge badge-dot mr-4">
                        <i class="bg-error"></i>
                        <span class="status">{{ ucfirst($log->btc_compatible) }}</span>
                      </span>



                        @endif
                     
                    </td>
                    <td>
                      {{ "$".number_format($log->price)." USD" }}
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="{{ $log->id }}" hidden>
                                           
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                @endforeach
               
                 </table>
            </div>
          </div>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col">
          <div class="card bg-default shadow">
            <div class="card-header bg-transparent border-0">
              <h3 class="text-white mb-0">Recently Sold Bank Logs</h3>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-dark table-flush">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Bank Name</th>
                    <th scope="col" class="sort" data-sort="budget">Balance</th>
                    <th scope="col" class="sort" data-sort="status">BTC Compatible</th>
                    <th scope="col">Price</th>
                    <th scope="col" class="sort" data-sort="completion">Time Sold</th>
                  </tr>
                </thead>
                                                  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $9,128.43 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $805 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $11,694.75 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $924 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="assets/img/theme/cb.jpg">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $8,244.32 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $786 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $8,675.32 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $798 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $12,887.54 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $969 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>              </table>
            </div>
          </div>
        </div>
      </div>
@endsection
