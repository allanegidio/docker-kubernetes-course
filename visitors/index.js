const express = require('express');
const redis = require('redis');

const app = express();
const clientRedis = redis.createClient();

clientRedis.set('visits', 0)

app.get('/', (req, res) => {
    clientRedis.get('visits', (err, visits) => {
        res.send(`Number of visits is: ${visits}.`);

        clientRedis.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log("Listening Visitors App on port 8081");
});