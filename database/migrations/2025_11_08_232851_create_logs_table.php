<?php

use App\Enums\LogType;
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
        Schema::create('logs', function (Blueprint $table) {
            $table->id();

            $table->enum('type', array_column(LogType::cases(), 'value'))->comment('类型');
            $table->string('tx_hash')->index()->comment('交易哈希');
            $table->text('content')->comment('内容');
            $table->json('data')->comment('数据');

            $table->timestamps();

            $table->unique(['type', 'tx_hash'], 'unique_log');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logs');
    }
};
