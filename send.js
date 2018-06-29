var amqp = require('amqplib/callback_api');

amqp.connect('amqp://esceozyd:Xzva5w9d5CssOWFqyOLx9GHI-j3Aw81B@emu.rmq.cloudamqp.com/esceozyd', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {durable: false});
        // Note: on Node 6 Buffer.from(msg) should be used
        ch.sendToQueue(q, new Buffer('Hello Dhaka!'));
        console.log(" [x] Sent 'Hello World!'");
    });
});