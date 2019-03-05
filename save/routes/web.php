<?php
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Database\MySqlConnection;
use Illuminate\Database\Query\Builder;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->post('/save', function(Request $request) {
    $matricule = $request->input('email');
    $surname = $request->input('password');

    app('db')->insert("INSERT INTO users (email, password) VALUES ('$email', '$password')");

    if (\Auth::attempt(array("matricule" => $matricule, "password" => $test))) {
        return 'WORKS';
    } else {
        return json_encode(\Auth::check());
    }
});
