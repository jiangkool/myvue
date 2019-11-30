<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
	use HasApiTokens, Notifiable;

    protected $fillable=['name','email','password'];

    public function scopeNotAdmin($query)
    {
    	return $query->where('name','!=','admin');
    }

    protected $hidden=['password'];
}
