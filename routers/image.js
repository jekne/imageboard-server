const { Router } = require("express");
const Image = require("../models").image;
const router = new Router();

const loggingMiddleware = (req, res, next) => {
  console.log("I got a request");
  console.log("the request type is", req.method);

  next(); // call the next handler in line, call the route handler
};

// http  POST :4000/images title="My image" url="test"
router.get("/", loggingMiddleware, async (req, res, next) => {
  try {
    const image = await Image.findAll();
    console.log(image);
    res.json(image);
  } catch (e) {
    console.log("error:", e.message);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      res.status(400).send("missing paramenters");
    } else {
      const newImage = await Image.create(req.body);
      res.json(newImage);
    }
  } catch (e) {
    console.log("this error", e.message);
  }
});

module.exports = router;
