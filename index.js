import express from "express";
import passport from "passport";
import dbConnect from "./dbConnect";
import todoRoutes from "./routes/todo.route";
import userRoutes from "./routes/user.route";
import trainerRoutes from "./routes/trainer.route";
import dotenv from "dotenv";
import courseRoute from "./routes/course.route";
import errorMiddleware from "./middlewares/error.middleware";

dotenv.config();

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

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
