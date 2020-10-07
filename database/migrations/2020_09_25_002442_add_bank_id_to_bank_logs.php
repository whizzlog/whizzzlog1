<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBankIdToBankLogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bank_logs', function (Blueprint $table) {
            $table->integer('bank_id')->unsigned();
            $table->foreign('bank_id')->references('id')->on('banks');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bank_logs', function (Blueprint $table) {
            //
        });
    }
}
