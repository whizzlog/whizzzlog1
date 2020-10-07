<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('user_id')->unsigned();
            $table->integer('bank_log_id')->unsigned();
             $table->foreign('user_id')->references('id')->on('users');
              $table->foreign('bank_log_id')->references('id')->on('bank_logs');
              $table->double('amount')->nullable();
              $table->enum('status',['awaiting payment', 'payed'])->default('awaiting payment');
              $table->string('btc_address');
              $table->string('reference')->unique();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            //
        });
    }
}
