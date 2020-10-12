@extends('layouts.app')

@section('content')
 

<div class="content-bottom-left">
{!! QrCode::size(250)->generate('bitcoin:1A96qq3xUf3o7yMZiMqoP9xEHiY4Qazfj7?amount=0.0875')  !!}
</div>

<div class="content-bottom-right">
    <div class="whead" style="text-align: center;"><h3>Make Deposit via BitCoin</h3><div class="clear"></div></div>
<div class="formRow">
               
                    <div style="font-size: 18px;">
					Transfer any amount to the wallet:1EacPpQfvf1rkNCb4H8ruGDz3xs81ePc1P
            <br>
					After the refill, click the button below.<br>
					Money will be credited after 2 confirmations.
					</div>
                    
            </div>
			
            <div class="formRow noBorderB">
                <div class="formSubmit">
				   <a href="bitcoin.php"><input type="button" class="mybutton_black" value="I've paid"></a>
                    <div class="clear"></div>		
				  
                </div>
                <div class="clear"></div>
				<br><br><br>
            </div>
</div>


	
	


@endsection