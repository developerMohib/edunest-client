import mongoose, { Document, Schema } from 'mongoose';
import { ICourse } from './course.model';

export interface IModule extends Document {
  title: string;
  moduleNumber: number;
  course: mongoose.Types.ObjectId | ICourse;
  createdAt: Date;
  updatedAt: Date;
}

const moduleSchema = new Schema<IModule>({
  title: { 
    type: String, 
    required: [true, 'Module title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long']
  },
  moduleNumber: { 
    type: Number, 
    required: true 
  },
  course: { 
    type: Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  }
}, {
  timestamps: true
});

// Auto-increment moduleNumber for each course
moduleSchema.pre('save', async function(next) {
  if (this.isNew) {
    const lastModule = await Module.findOne({ course: this.course })
      .sort({ moduleNumber: -1 });
    this.moduleNumber = lastModule ? lastModule.moduleNumber + 1 : 1;
  }
  next();
});

// Prevent model overwrite in Next.js hot reload
export const Module = mongoose.models.Module || mongoose.model<IModule>('Module', moduleSchema);