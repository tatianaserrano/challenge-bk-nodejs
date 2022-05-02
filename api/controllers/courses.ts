import { CoursesService } from "../services/courses-service";

const getCourses = (req: any, res: any) => {
    const coursesService = new CoursesService();    
    const { courses } = req.body;
    try {
        const response = coursesService.getCourses(courses)
        res.status(200).json(response)
    } catch (error: any) {
        res.status(error.status || 500);
        res.json({ message: error.message || 'Internal Server error'});
    }
}

export default getCourses;