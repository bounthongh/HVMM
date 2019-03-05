<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'email' => "herve.bounthong@gmail.com",
            "password" => Hash::make("rv")
        ]);

        User::create([
            'email' => "mickael@gmail.com",
            "password" => Hash::make("mike")
        ]);
    }
}

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call('UserTableSeeder');
    }
}
