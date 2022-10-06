import Course from "../models/couse.model";


class CourseController {
    static addCourse = async (req, res) => {
        try {
            const newCourse = new Course(req.body);
            const course = await newCourse.save();
            res.status(201).send(course);
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static getCourses = async (req, res) => {
        try {
            const courses = await Course.find().populate("trainer");
            res.status(200).send(courses);
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

export default CourseController;

