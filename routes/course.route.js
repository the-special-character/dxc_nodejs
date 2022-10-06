import express from "express";
import CourseController from "../controller/course.controller";
import asyncMiddleware from "../middlewares/async.middleware";
const courseRoute = express.Router();

courseRoute.post("/", asyncMiddleware(CourseController.addCourse));

courseRoute.get("/", asyncMiddleware(CourseController.getCourses));

export default courseRoute;