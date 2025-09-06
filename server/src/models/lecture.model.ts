import mongoose, { Document, Schema } from 'mongoose';
import { IModule } from './module.model';
import { ICourse } from './course.model';

export interface ILecture extends Document {
  title: string;
  videoUrl: string;
  pdfNotes: string[];
  module: mongoose.Types.ObjectId | IModule;
  course: mongoose.Types.ObjectId | ICourse;
  isPreview: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const lectureSchema = new Schema<ILecture>({
  title: { 
    type: String, 
    required: [true, 'Lecture title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long']
  },
  videoUrl: { 
    type: String, 
    required: [true, 'Video URL is required'] 
  },
  pdfNotes: [{ 
    type: String 
  }],
  module: { 
    type: Schema.Types.ObjectId, 
    ref: 'Module', 
    required: true 
  },
  course: { 
    type: Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  isPreview: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

// Prevent model overwrite in Next.js hot reload
export const Lecture = mongoose.models.Lecture || mongoose.model<ILecture>('Lecture', lectureSchema);