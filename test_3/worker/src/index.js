const morgan = require("morgan");
const Redis = require("ioredis");
const Queue = require("bull");
// use this function in order to transform incoming json objects
// to trees
const { jsonTreeToTree } = require("./utils");
// connect to redis 
const redisClient = new Redis(6379, 'redis');
// create new bull Queue
const taskQueue = new Queue('task queue', { redis: { port: 6379, host: 'redis' }});

// handle incoming jobs
taskQueue.process((job, done) => {
    const { tree, pathsToFind } = job.data;

    // INSERT YOUR CODE HERE

    return done();
})