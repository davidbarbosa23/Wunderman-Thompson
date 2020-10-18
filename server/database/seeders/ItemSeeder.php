<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Item;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clean table
        Item::truncate();

        // Default Active Items
        for ($i=1; $i <= 5; $i++) {
            Item::create([
                'title' => "Lorem Ipsum $i",
                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ante laoreet ligula sagittis sodales.",
                'photo' => "https://fakeimg.pl/400x400/?text=ACTIVE",
            ]);
        }

        // Default Soft Deleted Items
        for ($i=6; $i <= 15; $i++) {
            $item = Item::create([
                'title' => "Lorem Ipsum $i",
                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ante laoreet ligula sagittis sodales.",
                'photo' => "https://fakeimg.pl/400x400/?text=TRASH",
            ]);
            // Soft Deleted
            Item::destroy($item->id);
        }
    }
}
