import { api } from './axiosInstance';
import { Course, Lecture, Module } from './types';


export const coursesApi = {
  getCourses: async (): Promise<Course[]> => {
    const response = await api.get('/courses');
    return response.data;
  },

  getCourse: async (id: string): Promise<Course> => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  getInstructorCourses: async (): Promise<Course[]> => {
    const response = await api.get('/courses/instructor');
    return response.data;
  },

  createCourse: async (data: FormData): Promise<Course> => {
    const response = await api.post('/courses', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  getCourseModules: async (courseId: string): Promise<Module[]> => {
    const response = await api.get(`/modules/course/${courseId}`);
    return response.data;
  },

  getModuleLectures: async (moduleId: string): Promise<Lecture[]> => {
    const response = await api.get(`/lectures/module/${moduleId}`);
    return response.data;
  },

  getLecture: async (id: string): Promise<Lecture> => {
    const response = await api.get(`/lectures/${id}`);
    return response.data;
  },

  markAsCompleted: async (lectureId: string) => {
    const response = await api.post(`/lectures/${lectureId}/complete`);
    return response.data;
  },
};