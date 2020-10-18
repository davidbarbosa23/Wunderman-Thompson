<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clean table
        User::truncate();

        // Default Users
        User::create([
            'name' => "John Doe Original",
            'email' => "email@email.com",
            'password' => bcrypt('123456'),
        ]);
        for ($i=0; $i < 5; $i++) {
            User::create([
                'name' => "John Doe",
                'email' => "email$i@email.com",
                'password' => bcrypt('123456'),
            ]);
        }
    }
}
