export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  image?: string;
}
export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  instructor: User | string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Module {
  _id: string;
  title: string;
  moduleNumber: number;
  course: string | Course;
  lectures?: Lecture[];
  createdAt: string;
  updatedAt: string;
}

export interface Lecture {
  _id: string;
  title: string;
  videoUrl: string;
  pdfNotes: string[];
  module: string | Module;
  course: string | Course;
  isPreview: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserProgress {
  _id: string;
  user: string | User;
  lecture: string | Lecture;
  course: string | Course;
  isCompleted: boolean;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}