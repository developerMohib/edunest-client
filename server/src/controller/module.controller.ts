import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { Course } from '../models/course.model';
import { Module } from '../models/module.model';

export const createModule = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, courseId } = req.body;

    // Check if course exists and user is the instructor
    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }

    if (course.instructor.toString() !== req.user!._id.toString()) {
      res.status(403).json({ message: 'Not authorized to add modules to this course' });
      return;
    }

    const module = await Module.create({
      title,
      course: courseId
    });

    res.status(201).json(module);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getModules = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const modules = await Module.find({ course: req.params.courseId })
      .sort({ moduleNumber: 1 })
      .populate({
        path: 'lectures',
        select: 'title videoUrl pdfNotes isPreview',
        options: { sort: { createdAt: 1 } }
      });
    
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getModule = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const module = await Module.findById(req.params.id)
      .populate({
        path: 'lectures',
        select: 'title videoUrl pdfNotes isPreview',
        options: { sort: { createdAt: 1 } }
      });
    
    if (!module) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }

    res.json(module);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateModule = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const module = await Module.findById(req.params.id).populate('course');
    
    if (!module) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }

    // Check if the user is the course instructor
    if ((module.course as any).instructor.toString() !== req.user!._id.toString()) {
      res.status(403).json({ message: 'Not authorized to update this module' });
      return;
    }

    const updatedModule = await Module.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedModule);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteModule = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const module = await Module.findById(req.params.id).populate('course');
    
    if (!module) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }

    // Check if the user is the course instructor
    if ((module.course as any).instructor.toString() !== req.user!._id.toString()) {
      res.status(403).json({ message: 'Not authorized to delete this module' });
      return;
    }

    await Module.findByIdAndDelete(req.params.id);
    res.json({ message: 'Module removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};