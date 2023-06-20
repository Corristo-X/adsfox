<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChannelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('channels')->insert([
            ['name' => 'Google', 'client_count' => 725],
            ['name' => 'Facebook', 'client_count' => 225],
            ['name' => 'Instagram', 'client_count' => 15],
            ['name' => 'Twitter', 'client_count' => 30],
            ['name' => 'LinkedIn', 'client_count' => 45],
        ]);
    }
}
