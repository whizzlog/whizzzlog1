<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Vrajroham\LaravelBitpay\Events\BitpayWebhookReceived;

class ProcessBitpayWebhook
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
      public function handle(BitpayWebhookReceived $event)
      {
      $orderId = $event->payload['orderId'];
      $status = $event->payload['status'];
      // Other payload properties
      // You will receive 3 webhooks for single payment with different status.
      // 1. status = paid
      // 2. status = confirmed
      // 3. status = completed
      }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
