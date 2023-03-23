const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { Pool } = require("pg");
const http = require("http");
const dotenv = require("dotenv");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const pool = new Pool({
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   database: process.env.DATABASE_NAME,
//   max: 50, // 10 is default
//   idleTimeoutMillis: 10000, // 10000 is default
//   connectionTimeoutMillis: 2000, // 0 (no timeout!) is default
// });

// pool.on("error", (err) => {
//   console.error("pg pool error: ", err);
//   process.exit();
// });

// app.use(async (req, res, next) => {
//   try {
//     req.client = await pool.connect();
//     next();
//   } catch (err) {
//     console.error(err);
//     console.error("*** totalCount", pool.totalCount);
//     console.error("*** idleCount", pool.idleCount);
//     console.error("*** waitingCount", pool.waitingCount);
//     console.error("*** so, restarting server...");
//     process.exit();
//   }
// });

// app.use((req, res, next) => {
//   console.log(`*** requesting: , ${req.url}`);
//   next();
// });

var indexRouter = require("./routes/index");
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

const server = http.createServer(app);
server.listen(process.env.PORT || 8889);
server.on("listening", () => {
  console.log("Listening on ", server.address());
});

module.exports = app;
