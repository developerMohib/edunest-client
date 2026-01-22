import NotFound from '@/app/not-found';
import { coursesApi } from '@/utils/courses';
import { Course } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

const page = async (props: { params: Promise<{ id: string }> } ) => {
    const { id } = await props.params;
    let course: Course | null = null;

    try {
        course = await coursesApi.getCourse(id);
        console.log('corse',course)
    } catch (err) {
        console.error("Error fetching course:", err);
    }

    if (!course) return NotFound();

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            {/* Thumbnail */}
            <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Title + Price */}
            <div className="mt-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-eduBlack">{course.title}</h1>
                <span className="text-2xl font-semibold text-eduBlue">
                    ${course.price}
                </span>
            </div>

            {/* Instructor */}
            {course.instructor && (
                <div className="mt-4 flex items-center gap-4">
                    <Image
                        src={course.instructor.image}
                        alt={course?.instructor?.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">{course.instructor.name}</h3>
                        <p className="text-sm text-eduGray">{course.instructor.email}</p>
                    </div>
                </div>
            )}

            {/* Description */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">About this course</h2>
                <p className="text-eduGray leading-relaxed">{course.description}</p>
            </div>

            {/* Actions */}
            <div className="mt-10 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-eduBlue text-eduWhite font-semibold hover:bg-eduGreen transition">
                    Enroll Now
                </button>
                <button className="px-6 py-3 rounded-lg border font-semibold hover:bg-gray-100 transition">
                    Add to Wishlist
                </button>
            </div>
        </div>
    );
};

export default page;