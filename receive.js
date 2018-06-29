var amqp = require('amqplib/callback_api');

amqp.connect('amqp://esceozyd:Xzva5w9d5CssOWFqyOLx9GHI-j3Aw81B@emu.rmq.cloudamqp.com/esceozyd', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var q = 'hello';
        var r = 'nuru';

        ch.assertQueue(q, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {noAck: true});
    });


});