<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    
    use HasFactory;
    protected $fillable = [
        'image_url',
        'likes',
        'user_id',
    ];
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class ,"user_id" );
    }
}
