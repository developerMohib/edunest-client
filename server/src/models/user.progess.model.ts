import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user.model';
import { ILecture } from './lecture.model';
import { ICourse } from './course.model';

export interface IUserProgress extends Document {
  user: mongoose.Types.ObjectId | IUser;
  lecture: mongoose.Types.ObjectId | ILecture;
  course: mongoose.Types.ObjectId | ICourse;
  isCompleted: boolean;
  completedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userProgressSchema = new Schema<IUserProgress>({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  lecture: { 
    type: Schema.Types.ObjectId, 
    ref: 'Lecture', 
    required: true 
  },
  course: { 
    type: Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  isCompleted: { 
    type: Boolean, 
    default: false 
  },
  completedAt: { 
    type: Date 
  }
}, {
  timestamps: true
});

// Create a compound unique index
userProgressSchema.index({ user: 1, lecture: 1 }, { unique: true });

// Prevent model overwrite in Next.js hot reload
export const UserProgress = mongoose.models.UserProgress || mongoose.model<IUserProgress>('UserProgress', userProgressSchema);