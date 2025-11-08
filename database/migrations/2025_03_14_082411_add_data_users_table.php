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
        Schema::table('users', function (Blueprint $table) {
            // 上级id
            $table->unsignedBigInteger('parent_id')->nullable()->comment('上级id');
            // 所有上级id
            $table->json('parent_ids')->nullable()->comment('所有上级id');

            $table->string('address')->nullable()->unique()->comment('钱包地址');

            $table->decimal('aesc', 10, 2)->default(0)->comment('AESC余额');

            $table->decimal('self_performance', 10, 2)->default(0)->comment('个人业绩');
            $table->integer('direct_count')->default(0)->comment('直推人数');
            $table->decimal('direct_performance', 10, 2)->default(0)->comment('直推业绩');
            $table->integer('team_count')->default(0)->comment('团队人数');
            $table->decimal('team_performance', 10, 2)->default(0)->comment('团队业绩');

            $table->boolean('is_10_performance')->default(false)->comment('是否是10%收益地址');
            $table->boolean('is_admin')->default(false)->comment('是否管理员');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('address');
            $table->dropColumn('balance');
            $table->dropColumn('self_performance');
            $table->dropColumn('direct_count');
            $table->dropColumn('direct_performance');
            $table->dropColumn('team_count');
            $table->dropColumn('team_performance');
            $table->dropColumn('level_id');
            $table->dropColumn('status');
        });
    }
};
