import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { Course } from '../models/course.model';

export const createCourse = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { title, description, price } = req.body;

    let thumbnailPath = '';
    console.log(req);
    // if (req.file) {
    //   thumbnailPath = req.file.path;
    // }

    // Check if user is a teacher or admin
    if (req.user!.role !== 'teacher' && req.user!.role !== 'admin') {
      res
        .status(403)
        .json({ message: 'Only teachers and admins can create courses' });
      return;
    }

    const course = await Course.create({
      title,
      description,
      price: parseFloat(price),
      thumbnail: thumbnailPath,
      instructor: req.user!._id,
    });

    res.status(201).json(course);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      res.status(400).json({ message: errors.join(', ') });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

export const getCourses = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const courses = await Course.find({ isPublished: true }).populate(
      'instructor',
      'name email image',
    );

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getCourse = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id).populate(
      'instructor',
      'name email image',
    );

    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateCourse = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }

    // Check if the user is the instructor or admin
    if (
      course.instructor.toString() !== req.user!._id.toString() &&
      req.user!.role !== 'admin'
    ) {
      res.status(403).json({ message: 'Not authorized to update this course' });
      return;
    }

    const updates = { ...req.body };

    if (req.file) {
      updates.thumbnail = req.file.path;
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true },
    );

    res.json(updatedCourse);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      res.status(400).json({ message: errors.join(', ') });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

export const deleteCourse = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }

    // Check if the user is the instructor or admin
    if (
      course.instructor.toString() !== req.user!._id.toString() &&
      req.user!.role !== 'admin'
    ) {
      res.status(403).json({ message: 'Not authorized to delete this course' });
      return;
    }

    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getInstructorCourses = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    // Check if user is a teacher or admin
    if (req.user!.role !== 'teacher' && req.user!.role !== 'admin') {
      res
        .status(403)
        .json({
          message: 'Only teachers and admins can view instructor courses',
        });
      return;
    }

    const courses = await Course.find({ instructor: req.user!._id }).populate(
      'instructor',
      'name email image',
    );

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
