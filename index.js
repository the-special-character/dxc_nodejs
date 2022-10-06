import express from "express";
import path from "path";
import passport from "passport";
import { createLogger, format, transports } from "winston";
import 'winston-mongodb';
import dbConnect from "./dbConnect";
import todoRoutes from "./routes/todo.route";
import userRoutes from "./routes/user.route";
import trainerRoutes from "./routes/trainer.route";
import dotenv from "dotenv";
import courseRoute from "./routes/course.route";
import errorMiddleware from "./middlewares/error.middleware";

const { combine, errors, json } = format;

dotenv.config();

const filename = path.join(__dirname, "created-logfile.log");


const logger = createLogger({
  format: combine(errors({ stack: true }), json()),
  transports: [
    new transports.Console(),
    // new transports.File({ filename }),
    new transports.MongoDB({
      db: process.env.MONGODB_URI
    })
  ],
});

process.on("uncaughtException", (ex) => {
  console.log("un caught exception")
  logger.error(ex.message, ex);
  process.exit(1);
})

process.on("unhandledRejection", (ex) => {
  console.log("un caught exception")
  logger.error(ex.message, ex);
  process.exit(1);
})

const app = express();

const port = process.env.PORT || 3000;

dbConnect();

// middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

// // middlware
app.use(express.json());

app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", userRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/courses", courseRoute);

app.use(errorMiddleware(logger));


app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
