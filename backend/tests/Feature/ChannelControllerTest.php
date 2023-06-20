<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Channel;


class ChannelControllerTest extends TestCase
{
    use RefreshDatabase;

    // test metody index
    public function testIndex()
    {
        // utworzenie przykładowego kanału
        $channel = Channel::factory()->create();

        // wykonanie żądania GET
        $response = $this->get('/api/channels');

        // sprawdzenie odpowiedzi
        $response->assertStatus(200);
        $response->assertJson([$channel->toArray()]);
    }

    // test metody store
    public function testStore()
    {
        // dane do utworzenia nowego kanału
        $data = [
            'name' => 'Test Channel',
            'client_count' => 100,
        ];

        // wykonanie żądania POST
        $response = $this->post('/api/channels', $data);

        // sprawdzenie odpowiedzi
        $response->assertStatus(201);
        $response->assertJson($data);
    }

    // test metody show
    public function testShow()
    {
        // utworzenie przykładowego kanału
        $channel = Channel::factory()->create();

        // wykonanie żądania GET
        $response = $this->get('/api/channels/' . $channel->id);

        // sprawdzenie odpowiedzi
        $response->assertStatus(200);
        $response->assertJson($channel->toArray());
    }

    // test metody update
    public function testUpdate()
    {
        // utworzenie przykładowego kanału
        $channel = Channel::factory()->create();

        // dane do aktualizacji kanału
        $data = [
            'name' => 'Updated Channel',
            'client_count' => 200,
        ];

        // wykonanie żądania PUT
        $response = $this->put('/api/channels/' . $channel->id, $data);

        // sprawdzenie odpowiedzi
        $response->assertStatus(200);
        $response->assertJson($data);
    }

    // test metody destroy
    public function testDestroy()
    {
        // utworzenie przykładowego kanału
        $channel = Channel::factory()->create();

        // wykonanie żądania DELETE
        $response = $this->delete('/api/channels/' . $channel->id);

        // sprawdzenie odpowiedzi
        $response->assertStatus(204);

        // sprawdzenie, czy kanał został usunięty
        $this->assertDatabaseMissing('channels', ['id' => $channel->id]);
    }

}
