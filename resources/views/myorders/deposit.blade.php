@extends('layouts.app')

@section('content')

       <div class="content-bottom-left" id="page_wf"> </div>
        <div class="content-bottom-right">
            <h6>Deposits</h6>
            
       
        <table>
            <thead>
          <tr>
                  <td style="text-align: center;" class="sort_page" width="15%"><h3>Deposit Type</h3></td>
				  <td style="text-align: center;" class="sort_page" width="15%"><h3>Deposit Amount</h3></td>
                  <td style="text-align: center;" class="sort_page" width="15%"><h3>Deposit Time</h3></td>
                  <td style="text-align: center;" class="sort_page" width="15%"><h3>Deposit Status</h3></td>
            </tr>
            </thead>
            <tbody>
                            <tr>
                    <td colspan="4">No results found</td>
                </tr>
                        </tbody>
            <tfoot>
            </tfoot>
        </table>
 </div>
     <div class="clear"></div>
    
@endsection