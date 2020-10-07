  @extends('layouts.app')
  
  @section('content')
  <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header border-0">
              <h3 class="mb-0">My Orders</h3>
            </div>
            <div class="table-responsive">
                                                                                 
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Bank Name</th>
                    <th scope="col" class="sort" data-sort="budget">Verified Balance</th>
                    <th scope="col" class="sort" data-sort="status">BTC Compatible</th>
                    <th scope="col">Price</th>
                    <th scope="col">BTC Address</th>
                    <th scope="col" class="sort" data-sort="completion">Status</th>
                  </tr>
                </thead>
               
                @foreach ($orders as $order)
                 <tbody class="list">
                  <form  action="{{ route('log.pay') }}" method="post">
                      @csrf
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset($order->banklog->bank->image_url) }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">{{ $order->banklog->bank->name.", ".$order->banklog->bank->location }}</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                     {{ "$".number_format($order->banklog->balance). " USD"}}
                    </td>
                    <td>
                        @if($order->banklog->btc_compatible === "yes")
                         <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">{{ ucfirst($order->banklog->btc_compatible) }}</span>
                      </span>
                        @elseif($order->banklog->btc_compatible === "no")
                         <span class="badge badge-dot mr-4">
                        <i class="bg-error"></i>
                        <span class="status">{{ ucfirst($order->banklog->btc_compatible) }}</span>
                      </span>



                        @endif
                    </td>
                    <td>
                     {{ "$".number_format($order->amount). " USD"}}
                    </td>                    
                    <td>
                      1AixxV2mpumFigqBjibuYvhJQkV7JHbYYT                  
                      </td>                   
                       <td>
                           @if($order->status === "awaiting payment")
                           <span style='color:red;'>{{ ucfirst($order->status) }}</span> 

                           @elseif($order->status === "paid")
                           <span style='color:green;'>{{ ucfirst($order->status) }}</span> 

                           @endif
                         
                                    </td>          
                                               <td>
                                                   @if($order->status === "awaiting payment")
                      <div class="d-flex align-items-center">
                                            
                                            <input name="logid" type="text" value="{{ $order->bank_log_id }}" hidden>
                                            <input name="btcaddr" type="text" value="1AixxV2mpumFigqBjibuYvhJQkV7JHbYYT" hidden>
                                            <button class="btn btn-sm btn-primary" type="submit" name="buylog">Pay Now</button>                        <div>
                        </div>
                      </div>
                      @endif
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

  @endsection
      