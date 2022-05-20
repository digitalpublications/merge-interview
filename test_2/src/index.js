const express = require("express");
const morgan = require("morgan");
const app = express();
// use this function in order to transform incoming json objects
// to trees
const { jsonTreeToTree } = require("./utils");
const PORT = 7070;

// setup request logging
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

// INSERT YOUR CODE HERE

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});
