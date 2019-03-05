<?php

use App\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Database\MySqlConnection;
use Illuminate\Database\Query\Builder;

$router->get('/exportToCsv', function () use ($router) {
$table = User::all();

$filename = "user.csv";
$handle = fopen($filename, 'w+');
fputcsv($handle, array('email', 'password'));

foreach($table as $row) {
fputcsv($handle, array($row['email'], $row['password']));
}

fclose($handle);

$headers = array(
'Content-Type' => 'text/csv',
);

return response()->download($filename, 'user.csv', $headers);
});


// Route::get('/exportToCsv', function(){
//
//     $table = db::all();
//     $filename = "tweets.csv";
//     $handle = fopen($filename, 'w+');
//     fputcsv($handle, array('tweet text', 'screen name', 'name', 'created at'));
//
//     foreach($table as $row) {
//         fputcsv($handle, array($row['tweet_text'], $row['screen_name'], $row['name'], $row['created_at']));
//     }
//
//     fclose($handle);
//
//     $headers = array(
//         'Content-Type' => 'text/csv',
//     );
//
//     return Response::download($handle, 'tweets.csv', $headers);
// });

$router->get('/', function () use ($router) {
    $results = app('db')->select("SELECT * FROM Users");
    return $results;
});

// $router->get('/check', function() {
//     return response()->json(Auth::check());
// });
//
// $router->get('/login', function(){
//     $credentials = array("email" => "bounthong.h@gmail.com", "password" => "police");
//
//     if(Auth::attempt($credentials, true)){
//         // return 'You have successfully logged in :D';
//         return "You are connected";
//
//     } else {
//         return 'Sorry, but your Credentials seem to be wrong, stupid';
//     }
//
// });
//
// $router->get("/co", function() {
//     if (\Auth::attempt(array("email" => "chefg@boston.departement.com", "password" => "chef"))) {
//         return "Welcolme";
//     } else {
//         return json_encode(\Auth::check());
//     }
// });
//
// $router->post("/login", function(Request $request) {
//     $matricule = $request->input('matricule');
//     $password = $request->input('password');
//
//     if (\Auth::attempt(array("matricule" => $matricule, "password" => $password))) {
//         return redirect()->to('http://localhost:3000/login');
//     } else {
//         return json_encode(\Auth::check());
//     }
// });
//
// $router->get('/exportToCsv', function(){
//        $table = User::all();
//        $filename = "user.csv";
//        $handle = fopen($filename, 'w+');
//        fputcsv($handle, array('id', 'email'));
//
//        foreach($table as $row) {
//            fputcsv($handle, array($row['id'], $row['email']));
//        }
//
//        fclose($handle);
//
//        $headers = array(
//            'Content-Type' => 'text/csv',
//        );
//
//        return response()->download($filename, 'user.csv', $headers);
//    });
