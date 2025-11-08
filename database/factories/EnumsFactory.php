<?php

namespace Database\Factories;

use App\Models\app\Enums;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @template TModel of \App\Models\app\Enums
 *
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<TModel>
 */
class EnumsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<TModel>
     */
    protected $model = Enums::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }
}
