const { Router } = require("express");
const User = require("../models").user;
const router = new Router();

// router.get("/", async (req, res, next) => {
//   try {
//     const allUsers = await User.findAll();
//     console.log(allUsers);

//     res.json(allUsers);
//   } catch (e) {
//     console.log("error:", e.message);
//   }
// });

const loggingMiddleware = (req, res, next) => {
  console.log("I got a request");
  console.log("the request type is", req.method);

  next(); // call the next handler in line, call the route handler
};

router.get("/", loggingMiddleware, async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (e) {
    next(e);
  }
});

// // Create a new user account reme    http -v POST :4000/users email=teste@ name=newuser
router.post("/x", loggingMiddleware, async (req, res, next) => {
  try {
    // const body = req.body;
    // console.log("the req body", body);**** to see from where it is comming**
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// // Create a new user account
// app.post("/users/post", async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
