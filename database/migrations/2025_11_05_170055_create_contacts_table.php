<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('姓名');
            $table->string('email')->comment('邮箱');
            $table->string('company')->nullable()->comment('公司');
            $table->string('category')->comment('咨询类别');
            $table->string('subject')->comment('主题');
            $table->text('message')->comment('消息内容');
            $table->string('file')->nullable()->comment('附件路径');
            $table->string('ip')->nullable()->comment('IP地址');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
