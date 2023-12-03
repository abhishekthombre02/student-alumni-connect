const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan")
const cookies= require("cookie-parser");
const { connectDatabase } = require("./src/Database/connection");
const router= require("./router")
app.use(express.json()); //parse incoming JSON data from HTTP requests.
app.use(express.urlencoded({ extended: false }));//It is used for processing form data submitted by clients when the Content-Type of the request is application/x-www-form-urlencoded


app.use(morgan("dev"));  // morgan is a popular logging middleware for Express.js that generates HTTP request logs,

app.use(cookies());//parse cookies from incoming HTTP requests

app.use(function (req, res, next) {
    var allowedDomains = [
      // "https://",
    ];
    var origin = req.headers.origin;
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    
    //specifies which HTTP methods are allowed for cross-origin requests
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    //specifying which HTTP headers are allowed in the request.
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, Accept"
    );
    //This allows credentials (e.g., cookies or HTTP authentication) to be included in cross-origin requests when the client specifies it.
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });

  app.use("/", router);
  connectDatabase().then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  });