import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import upload from '../middlewares/upload';
import { createLecture, deleteLecture, getLecture, getLectures, markAsCompleted, updateLecture } from '../controller/lecture.controller';

const router = express.Router();

router.route('/')
  .post(authenticate, authorize('admin'), upload.array('pdfNotes', 5), createLecture);

router.route('/module/:moduleId')
  .get(getLectures);

router.route('/:id')
  .get(authenticate, getLecture)
  .put(authenticate, authorize('admin'), upload.array('pdfNotes', 5), updateLecture)
  .delete(authenticate, authorize('admin'), deleteLecture);

router.route('/:id/complete')
  .post(authenticate, markAsCompleted);

export default router;