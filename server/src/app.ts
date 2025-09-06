import express, { NextFunction, Request, Response } from 'express';
import authRoutes from './routes/auth.routes';
import courseRoutes from './routes/course.routes';
import moduleRoutes from './routes/module.routes';
import lectureRoutes from './routes/lecture.routes';

const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/lectures', lectureRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('EduNest Server is running successfully 🚀');
});

type Err = string | number | undefined | null;
app.use((error: Err, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: 'Server something went wrong',
    });
  }
  next();
});

export default app;
