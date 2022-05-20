const express = require("express");
const morgan = require("morgan");
const Redis = require("ioredis");
const Queue = require("bull");
// connect to redis 
const redisClient = new Redis(6379, 'redis');
// create new bull Queue
const taskQueue = new Queue('task queue', { redis: { port: 6379, host: 'redis' }});
const app = express();
const PORT = 7070;

// setup request logging
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

// INSERT YOUR CODE HERE

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});
