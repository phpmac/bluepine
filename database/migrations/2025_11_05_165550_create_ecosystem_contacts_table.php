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
        Schema::create('ecosystem_contacts', function (Blueprint $table) {
            $table->id();
            $table->string('company')->nullable()->comment('公司');
            $table->string('name')->nullable()->comment('姓名');
            $table->string('position')->nullable()->comment('职位');
            $table->string('email')->nullable()->comment('邮箱');
            $table->string('category')->nullable()->comment('分类');
            $table->text('description')->nullable()->comment('描述');
            $table->string('ip')->nullable()->comment('IP地址');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ecosystem_contacts');
    }
};
