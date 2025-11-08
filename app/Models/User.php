<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'parent_id',
        'parent_ids',
        'address',
        'aesc',
        'self_performance',
        'direct_count',
        'direct_performance',
        'team_count',
        'team_performance',
        'is_10_performance',
        'is_admin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'parent_ids' => 'array',
            'is_10_performance' => 'boolean',
            'is_admin' => 'boolean',
        ];
    }

    /**
     * 上级
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo(User::class, 'parent_id');
    }

    /**
     * 下级
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function children()
    {
        return $this->hasMany(User::class, 'parent_id');
    }

    /**
     * 交易
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function trades()
    {
        return $this->hasMany(Trade::class);
    }

    /**
     * 绑定上级
     *
     * @param  User  $parent  上级
     */
    public function bindParent(User $parent)
    {
        throw_if($this->id === $parent->id, '不能绑定自己');

        throw_if($this->parent_id || $this->parent_ids, '用户已绑定上级');

        DB::transaction(function () use ($parent) {
            // 使用锁确保数据一致性
            $currentUser = self::lockForUpdate()->findOrFail($this->id);
            $parentUser = self::lockForUpdate()->findOrFail($parent->id);

            // 重新检查是否已绑定（防止并发问题）
            throw_if($currentUser->parent_id || $currentUser->parent_ids, '用户已绑定上级');

            // 更新用户上级数据
            $currentUser->parent_id = $parent->id;
            $currentUser->parent_ids = $parent->parent_ids ? array_merge($parent->parent_ids, [$parent->id]) : [$parent->id];
            $currentUser->save();

            // 增加上级直推人数
            $parentUser->direct_count++;
            $parentUser->save();

            // 增加所有上级的团队人数
            if ($currentUser->parent_ids) {
                self::whereIn('id', $currentUser->parent_ids)->increment('team_count');
            }
        });
    }
}
