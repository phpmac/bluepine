<?php

use App\Enums\TradeType;
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
        Schema::create('trades', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->comment('用户ID');

            $table->decimal('amount', 10, 2)->comment('交易数量');
            $table->enum('type', array_column(TradeType::cases(), 'value'))->comment('交易类型');
            $table->integer('block_number')->comment('区块高度');
            $table->string('tx_hash')->comment('交易哈希');

            $table->unique(['user_id', 'tx_hash', 'amount'], 'unique_trade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
