<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $systemUser = User::factory()->create([
            'name' => '系统号',
            'email' => 'a@a.a',
            'password' => Hash::make('a@a.a'),
            'is_admin' => true,
        ]);
    }
}
