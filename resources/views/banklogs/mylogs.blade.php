@extends('layouts.app')

@section('content')
<div class="row">
        <div class="col">
          <div class="card bg-default shadow">
            <div class="card-header bg-transparent border-0">
              <h3 class="text-white mb-0">My Bank Logs</h3>
            </div>
            <div class="table-responsive">
                
                                                                  
              <table class="table align-items-center table-dark table-flush">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Bank Name</th>
                    <th scope="col" class="sort" data-sort="budget">Verified Balance</th>
                    <th scope="col" class="sort" data-sort="completion"></th>
                  </tr>
                </thead>
                                                              </table>
            </div>
          </div>
        </div>
      </div>

      @endsection
      