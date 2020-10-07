@extends('layouts.app')

@section('content')
 <div class="row">
        <div class="col-xl-4 order-xl-2">
          <div class="card card-profile">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
<br />
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="text-center">
                <h5 class="h3">
                  If you need quick assistance, send your inquiries to support@whizzlog.com.
                </h5>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>An admin support will respond to you.
                </div>
                <div class="h5 mt-4">
                    
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>To learn how to use Whizzlog, read the short guide below.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Whizzlog Guide </h3>
                </div>
                <div class="col-4 text-right">
                </div>
              </div>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-bold">What is Whizzlog?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>Whizzlog is a self-serve platform for buying US Bank Logs.</label>
                  </div>      
                <h6 class="heading-small text-bold">What kind of Bank Logs is sold?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>Whizzlog sells only US bank logs used to claim unemployment benefits.</label>
                  </div>      
                <h6 class="heading-small text-bold">How much balance is in the bank accounts?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>The account balance of each bank log is stated when the bank log is listed. The account balance have been verfied by Whizzlog.</label>
                  </div>      
                <h6 class="heading-small text-bold">What is the meaning of "BTC Compatible"?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>BTC Compatible means that the bank allows you to buy Bitcoins from the account. You can buy Bitcoins directly from inside the bank account with the balance in the account.</label>
                  </div>      
                <h6 class="heading-small text-bold">How do I know a bank log is BTC compatible?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>It is stated in each of the listed bank logs for sale.</label>
                  </div>      
                <h6 class="heading-small text-bold">How do I pay for bank logs?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>You pay using Bitcoins to maintain your privacy.</label>
                  </div>      
                <h6 class="heading-small text-bold">Do you sell CCs?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>No. Whizzlog only sells US bank logs.</label>
                  </div>       
                <h6 class="heading-small text-bold">I am a Newbie, how can I make money with Whizzlog?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>Whizzlog is not a playground. You should know what you are doing. If you are new, this is how to use Whizzlog in simple terms:
                        
                        <br /><br />1. Buy a bank log<br />
                        <br />2. Login using the bank log details sent to you. (Remember to login with only a US IP. You can use a free VPN to connect from the US)<br />
                        <br />3. Navigate through the bank account to where you buy cryptocurrency. Select Bitcoin. Use the balance in the account to purchase Bitcoins. Provide your Bitcoin address to receive your Bitcoin and cashout your bank log balance. (You should already know how to use Bitcoins) <br /></label>
                  </div>      
                <h6 class="heading-small text-bold">need further assistance?</h6>
                    <div class="col-md-12">
                        <label class="form-control-label" for="input-address"><span class="badge badge-dot">
                        <i class="bg-info"></i></span>Please write to <b>support@whizzlog.com</b></label>
                  </div>  
                  
                               
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>

      @endsection