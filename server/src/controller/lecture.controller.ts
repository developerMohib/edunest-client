import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { Module } from '../models/module.model';
import { Lecture } from '../models/lecture.model';
import { UserProgress } from '../models/user.progess.model';

export const createLecture = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, videoUrl, moduleId, isPreview } = req.body;

    // Check if module exists and user is the instructor
    const module = await Module.findById(moduleId).populate('course');
    if (!module) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }

    if ((module.course as any).instructor.toString() !== req.user!._id.toString()) {
      res.status(403).json({ message: 'Not authorized to add lectures to this module' });
      return;
    }

    // Get PDF file paths
    const pdfNotes = req.files ? 
      (req.files as Express.Multer.File[]).map(file => file.path) : [];

    const lecture = await Lecture.create({
      title,
      videoUrl,
      pdfNotes,
      module: moduleId,
      course: (module.course as any)._id,
      isPreview: isPreview === 'true'
    });

    res.status(201).json(lecture);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getLectures = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lectures = await Lecture.find({ module: req.params.moduleId })
      .sort({ createdAt: 1 });
    
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getLecture = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    
    if (!lecture) {
      res.status(404).json({ message: 'Lecture not found' });
      return;
    }

    // Check if user has access to this lecture
    if (req.user!.role === 'student' && !lecture.isPreview) {
      // Check if user has completed previous lectures
      const previousLectures = await Lecture.find({
        course: lecture.course,
        module: lecture.module,
        createdAt: { $lt: lecture.createdAt }
      }).sort({ createdAt: 1 });

      if (previousLectures.length > 0) {
        const lastPreviousLecture = previousLectures[previousLectures.length - 1];
        const progress = await UserProgress.findOne({
          user: req.user!._id,
          lecture: lastPreviousLecture._id,
          isCompleted: true
        });

        if (!progress) {
          res.status(403).json({ message: 'Complete previous lectures first' });
          return;
        }
      }
    }

    res.json(lecture);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateLecture = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lecture = await Lecture.findById(req.params.id).populate('course');
    
    if (!lecture) {
      res.status(404).json({ message: 'Lecture not found' });
      return;
    }

    // Check if the user is the course instructor
    if ((lecture.course as any).instructor.toString() !== req.user!._id.toString()) {
      res.status(403).json({ message: 'Not authorized to update this lecture' });
      return;
    }

    const updates = { ...req.body };
    
    // Get PDF file paths if new files were uploaded
    if (req.files && (req.files as Express.Multer.File[]).length > 0) {
      const pdfNotes = (req.files as Express.Multer.File[]).map(file => file.path);
      updates.pdfNotes = [...lecture.pdfNotes, ...pdfNotes];
    }

    const updatedLecture = await Lecture.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    res.json(updatedLecture);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteLecture = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lecture = await Lecture.findById(req.params.id).populate('course');
    
    if (!lecture) {
      res.status(404).json({ message: 'Lecture not found' });
      return;
    }

    // Check if the user is the course instructor
    if ((lecture.course as any).instructor.toString() !== req.user!._id.toString()) {
      res.status(403).json({ message: 'Not authorized to delete this lecture' });
      return;
    }

    await Lecture.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lecture removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const markAsCompleted = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    
    if (!lecture) {
      res.status(404).json({ message: 'Lecture not found' });
      return;
    }

    // Check if user already marked this lecture as completed
    const existingProgress = await UserProgress.findOne({
      user: req.user!._id,
      lecture: req.params.id
    });

    if (existingProgress) {
      // Update existing progress
      existingProgress.isCompleted = true;
      existingProgress.completedAt = new Date();
      await existingProgress.save();
    } else {
      // Create new progress record
      await UserProgress.create({
        user: req.user!._id,
        lecture: req.params.id,
        course: lecture.course,
        isCompleted: true,
        completedAt: new Date()
      });
    }

    res.json({ message: 'Lecture marked as completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};