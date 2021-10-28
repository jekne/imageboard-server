const express = require("express");
const app = express();
const jsonParser = express.json();
const port = process.env.PORT || 4000;

const imagesRouter = require("./routers/image");
const userRouter = require("./routers/user");
// const middleware = require("./routers/middleware");

// const loggingMiddleware = (req, res, next) => {
//   console.log("I got a request");
//   console.log("the request type is", req.method);

//   next(); // call the next handler in line, call the route handler
// };

// middleware at ROUTE LEVEL
// app.get("/middleware-test", (req, res, next) => {
//   console.log("in the route");

//   res.send("middleware tested successfully");
// });

app.use(jsonParser);
app.use("/images", imagesRouter);
app.use("/users", userRouter);
// app.use("/mm", middleware);

app.listen(port, () => console.log(`Server started in port: ${port}`));
