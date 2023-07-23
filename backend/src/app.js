// import some node modules for later

const express = require("express");
const cors = require("cors");
const fs = require("node:fs");
const path = require("node:path");
const routes = require("./route/index");

// create express app

const app = express();

// use some application-level middlewares
const options = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: process.env.FRONTEND_URL,
  preflightContinue: false,
};
app.use(cors(options));
app.use(express.json());

// import and mount the API routes
app.use("/", routes);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public"))); // TODO

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
); // TODO

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources
  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));
  // redirect all requests to the REACT index file
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
} // TODO

// ready to export

module.exports = app;
