import Course from "../models/couse.model";

class CourseController {
  static addCourse = async (req, res) => {
    const newCourse = new Course(req.body);
    const course = await newCourse.save();
    res.status(201).send(course);
  };

  static getCourses = async (req, res) => {
    const courses = await Course.find().populate("trainer");
    res.status(200).send(courses);
  };
}

export default CourseController;
