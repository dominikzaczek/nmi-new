const express = require("express");
const app = express();
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

//Routes
const workshopRoutes = require("./routes/workshopRoutes.js");
const lessonRoutes = require("./routes/lessonRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const viewRoutes = require("./routes/viewRoutes.js");

//Safety
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");

app.set("view engine", "pug");
app.set("views", "./views");
// GLOBAL MIDDLEWARE
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       "default-src": ["'self'"],
//       "script-src": ["'self'", "'*.cloudflare.com'"],
//       "object-src": ["'none'"],
//     },
//   })
// );
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(cookieParser());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP. Please, try again in an hour.",
});

app.use("/", limiter);

app.use(mongoSanitize());
app.use(xss());

// app.use((req, res, next) => {
//   console.log("There is a cookie: " + req.cookies);
//   next();
// });
//ROUTES
app.use("/", viewRoutes);
app.use("/api/workshops", workshopRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/users", userRoutes);

app.all("*", (req, res, next) => {
  // err.statusCode = 404;
  // err.status = "fail";

  next(new AppError(`Cannot find this URL ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
