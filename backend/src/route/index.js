const express = require("express");

const app = express();

const router = require("./router");

app.use("/chat", router);

module.exports = app;
