@extends('layouts.app')

@section('content')
<div class="content-bottom-left" id="page_wf">
        <div class="categories">
            <ul>
                <h3>Search</h3>
                <form method="post" action="/banks.php">
                    <li class="selector">Balance</li>
                    <select name="balance" style="margin: 3px">
                       <option value="0-999999">Choose balance</option>
                        <option value="0-99">0-100 (8)</option>
                        <option value="100-499">100-500 (0)</option>
                        <option value="500-999">500-1000 (0)</option>
                        <option value="1000-2999">1000-3000 (0)</option>  
						<option value="3000-4999">3000-5000 (1)</option>  	
						<option value="5000-9999">5000-10 000 (0)</option>  
						<option value="10000-14999">10 000-15 000 (4)</option> 
						<option value="15000-24999">15 000-25 000 (0)</option>
						<option value="25000-49999">25 000-50 000 (2)</option> 
						<option value="50000-99999">50 000-100 000 (1)</option> 
						<option value="100000-199999">100 000-200 000 (0)</option> 
						<option value="200000-399999">200 000- 400 000 (0)</option>       
						<option value="400000-9999999">400 000+ (0)</option>  						
                  


                    </select>
					
					<li class="selector">Bank</li>
                    <select name="bank" style="margin: 3px">
                       <option value="all">Select bank:</option>
                        					   <option value="unifyfcu.com" >unifyfcu.com</option>  						
											   <option value="IBC.com" >IBC.com</option>  						
											   <option value="Greenstate.org" >Greenstate.org</option>  						
											   <option value="Vystar" >Vystar</option>  						
											   <option value="firstcitizens.com" >firstcitizens.com</option>  						
											   <option value="onpointcu.com" >onpointcu.com</option>  						
											   <option value="Umpquabank" >Umpquabank</option>  						
											   <option value="Citadelbanking.com" >Citadelbanking.com</option>  						
											   <option value="firstrepublic.com" selected="">firstrepublic.com</option>  						
											   <option value="hillsbank.com" >hillsbank.com</option>  						
											   <option value="fnb-online.com" >fnb-online.com</option>  						
											   <option value="Chartway.com" >Chartway.com</option>  						
											   <option value="tcunet.com" >tcunet.com</option>  						
											   <option value="Onenevada.org" >Onenevada.org</option>  						
											   <option value="firstmarkcu.org" >firstmarkcu.org</option>  						
											   <option value="aplusfcu.org" >aplusfcu.org</option>  						
											   <option value="Cutx.org" >Cutx.org</option>  						
											   <option value="Applebank.com" >Applebank.com</option>  						
											   <option value="Campuscu.com" >Campuscu.com</option>  						
											   <option value="Unitedfcu.com" >Unitedfcu.com</option>  						
											   <option value="ucbi.com" >ucbi.com</option>  						
											   <option value="Citibank.com" >Citibank.com</option>  						
											   <option value="Santanderbank" >Santanderbank</option>  						
											   <option value="asbhawaii.com" >asbhawaii.com</option>  						
											   <option value="gtefinancial.org" >gtefinancial.org</option>  						
											   <option value="fhb.com" >fhb.com</option>  						
											   <option value="fnbo.com" >fnbo.com</option>  						
											   <option value="Simple.com" >Simple.com</option>  						
											   <option value="key.com" >key.com</option>  						
											   <option value="mysummit.bank" >mysummit.bank</option>  						
											   <option value="traviscu.org" >traviscu.org</option>  						
											   <option value="uhcu.org" >uhcu.org</option>  						
											   <option value="visionsfcu.org" >visionsfcu.org</option>  						
										
                  </select>
		
                                            <li class="selector" style="margin: 3px">Number of products per page</a></li><select name="ipp" class="paginate_button"><option value="10">10</option>
					<option value="25">25</option>
					<option selected value="40">40</option>
					<option value="100">100</option>
					</select>

                    

                    <div>
                        <input type="submit" value="Search"  class="mybutton">
                        <div class="clear"></div>
                    </div>
                </form>

            </ul>
        </div>

</div>

<div class="content-bottom-right">
	<div class="nNote nFailure">
                <p style="text-align:center;font-weight: bold;font-size:17px;">Replacement: invalid, non-compliance of the balance according to the limits, the bank is linked to Paypal</p>
            </div>
	<table>
            <thead>
            <tr>

                <td style="text-align: center;" width="15%" class="sort_page"><h3>Total Balance</h3></td>
                
				<td style="text-align: center;" width="15%"><h3>Bank name</h3></td>
				<td style="text-align: center;" width="15%"><h3>Created</h3></td>
                <td style="text-align: center;" width="5%" class="sort_page"><h3>Btc Compatible</h3></td>
                <td style="text-align: center;" width="10%" class="sort_page"><h3>Price</h3></td>
                <td style="text-align: center;" width="10%"><h3>Buy</h3></td>
                <td width="5%" class="all_checked"><h3>All</h3></td>

            </tr>
            </thead>
            <tbody>
                           @foreach ($banklogs as $log)
                             <tr>

                    <td style="text-align: center; padding: 5px;">  {{ "$".number_format($log->balance)." USD" }}</td>
                   <td style="text-align: center; padding: 5px;">{{ ucfirst($log->bank->name.", ".$log->bank->location) }}</td>
					<td style="text-align: center; padding: 5px;">{{ $log->created_at->diffForHumans() }}</td>
                    <td style="text-align: center; padding: 5px;">{{ ucfirst($log->btc_compatible) }}</td> 
                    <td style="text-align: center;padding: 0px 0px;">{{ "$".number_format($log->price)." USD" }}</td>
                    <td style="text-align: center;padding: 0px 0px;"><form method="post" action="/banks.php" name="buy2740"><input type="hidden" name="id_buy" value="2740"><input type="submit" class="mybutton_black" value="Buy" style="cursor: pointer;"></form></td>
                    <td style="vertical-align: middle; text-align: center;"><input type="checkbox" name="banks[]" value="2740" class="banks_id checkbox"><input type="hidden" value="0" class="status_checked"></td>
                </tr>
                               
                           @endforeach

                          

                        </tbody>
	</table>
		        <div class="listing">
            <div class="paginate paging_full_numbers">
                <a class="paginate_active" href="#">1</a> <a class="paginate_button" href="/banks.php?page=1&amp;ipp=All&amp;bank=firstrepublic.com">All</a> 

            </div>
        </div>
        <div class="add_to_cart_all"><input type="button" class="mybutton_black banks_add_to_cart" value="Add to Cart" style="cursor: pointer;"></div>
</div>
    <div class="clear"></div>@endsection