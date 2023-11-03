const express = require('express');
const { randomBytes } = require('crypto');

const app = express();

const dummyBuffer = randomBytes(1024 * 1024 * 10);

app.all("*", (req, res) => {
    console.log("got request!");

    res.set("Content-Type", "application/octet-stream");
    res.status(200).send(dummyBuffer);
});

app.listen(4445, () => console.log("server listening on :4445"));