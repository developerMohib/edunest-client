import express from 'express';
import { getMe, login, logout, register } from '../controller/auth.controller';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticate, getMe);
router.post('/logout', logout);

export default router;