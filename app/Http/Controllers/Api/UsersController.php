<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Setting;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;


class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::NotAdmin()->paginate(10));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validateData=$request->validate([
            'name'=>'required|min:2',
            'email'=>'required|email',
            'password'=>'required|min:5'
        ],[
            'name.required'=>'姓名必须填写',
            'email.required'=>'邮件地址必填',
            'password.required'=>'密码必填'

        ]);

        $user=User::create(['name'=>$request->name,'email'=>$request->email,'password'=>bcrypt($request->password)]);

        return new UserResource($user);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json(['status'=>'success']);
    }

    public function login(Request $request)
    {
        $userName=$request->userName;
        $password=$request->password;

        if (auth()->attempt(['name'=>$userName,'password'=>$password])) {
            $user=User::where('name',$userName)->first();
            auth()->login($user);
            $token = $user->createToken('token')->accessToken;

            return response()->json(compact('token','user'));
        }

    }

    public function settings()
    {
        dd(Setting::where('key','网站标题')->first());
    }
}
