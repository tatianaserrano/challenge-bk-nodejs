import { Router } from "express";
import getCourses from '../controllers/courses';
import authMiddleware from "../middlewares/auth-middleware";

const router = Router();

router.use(authMiddleware);
router.get('/sorted-courses', getCourses);



export default router;
