<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EcosystemContact extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'company',
        'name',
        'position',
        'email',
        'category',
        'description',
        'ip',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'ip',
    ];
}
