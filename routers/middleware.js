const { Router } = require("express");
const Image = require("../models").image;
const middleware = require("../index");
const User = require("../models").user;
const router = new Router();

const loggingMiddleware = (req, res, next) => {
  console.log("I got a request");
  console.log("the request type is", req.method);

  next(); // call the next handler in line, call the route handler
};

// middleware at ROUTE LEVEL
app.get("/middleware-test", (req, res, next) => {
  console.log("in the route");

  res.send("middleware tested successfully");
});

module.exports = router;
