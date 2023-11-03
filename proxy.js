const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer({});

app.all("*", (req, res) => {
    proxy.web(req, res, { target: "http://localhost:4445" });
});

app.listen(4444, () => console.log("proxy listing on :4444"));