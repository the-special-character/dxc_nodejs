import express from "express";
import CourseController from "../controller/course.controller";
const courseRoute = express.Router();

courseRoute.post("/", CourseController.addCourse);

courseRoute.get("/", CourseController.getCourses);

export default courseRoute;