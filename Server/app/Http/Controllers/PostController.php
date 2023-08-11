<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;


class PostController extends Controller
{
    public function addPost(Request $request){
        $id=Auth::id();
        $post= new Post;
        $post->image_url = $request->image_url;
        $post->user_id = $id;
        $post->save();

        return response()->json([
            'status' => 'success',
            'message' => 'post created successfully',
            'post' => $post,
        ]);   
    }

    public function getAllContacts(){
        $contacts = Contact::all();
        return response()->json([
            'status' => 'success',
            'message' => 'contacts retieved',
            'user' => $contacts,
        ]);   
    }
    public function getUserContacts(){
        $user = Auth::user();
        $id = $user->id;
        $contacts = Contact::where('user_id', $id)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'User contacts retrieved',
            'user' => $contacts,
        ]);   
    }
    
}
