import express from 'express';
import { createCourse, deleteCourse, getCourse, getCourses, getInstructorCourses, updateCourse } from '../controller/course.controller';
import { authenticate, authorize } from '../middlewares/auth';
import upload from '../middlewares/upload';

const router = express.Router();

router.route('/')
  .get(getCourses)
  .post(authenticate, authorize('teacher', 'admin'), upload.single('thumbnail'), createCourse);

router.route('/instructor')
  .get(authenticate, authorize('teacher', 'admin'), getInstructorCourses);

router.route('/:id')
  .get(getCourse)
  .put(authenticate, authorize('teacher', 'admin'), upload.single('thumbnail'), updateCourse)
  .delete(authenticate, authorize('teacher', 'admin'), deleteCourse);

export default router;