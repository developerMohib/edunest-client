'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Course {
    _id: string;
    thumbnail: string;
    title: string;
    price: number;
    description: string;
}

export default function AdminCourses() {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        fetch('/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    console.log(courses)
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map(course => (
                <div key={course._id} className="border rounded-lg shadow p-4">
                    <Image src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover rounded" width={500} height={500} />
                    <h2 className="text-xl font-semibold mt-3">{course.title}</h2>
                    <p className="text-eduGray font-medium">${course.price}</p>
                    <p className="mt-2 text-eduGray">{course.description}</p>
                </div>
            ))}
        </div>
    );
}
