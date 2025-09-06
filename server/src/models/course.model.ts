import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user.model';

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  instructor: mongoose.Types.ObjectId | IUser;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<ICourse>({
  title: { 
    type: String, 
    required: [true, 'Course title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long']
  },
  description: { 
    type: String, 
    required: [true, 'Course description is required'],
    minlength: [10, 'Description must be at least 10 characters long']
  },
  price: { 
    type: Number, 
    required: true, 
    default: 0,
    min: [0, 'Price cannot be negative']
  },
  thumbnail: { 
    type: String, 
    required: [true, 'Course thumbnail is required']
  },
  instructor: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  isPublished: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

// Prevent model overwrite in Next.js hot reload
export const Course = mongoose.models.Course || mongoose.model<ICourse>('Course', courseSchema);