import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { createModule, deleteModule, getModule, getModules, updateModule } from '../controller/module.controller';
  ;

const router = express.Router();

router.route('/')
  .post(authenticate, authorize('admin'), createModule);

router.route('/course/:courseId')
  .get(getModules);

router.route('/:id')
  .get(getModule)
  .put(authenticate, authorize('admin'), updateModule)
  .delete(authenticate, authorize('admin'), deleteModule);

export default router;