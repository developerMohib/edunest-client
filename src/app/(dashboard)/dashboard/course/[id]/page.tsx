import React from "react";

interface CoursePageProps {
    params: { id: string };
}

const CoursePage: React.FC<CoursePageProps> = ({ params }) => {
    console.log(params.id);
    return (
        <main>
            <h1>Course Details</h1>
            <p>Course ID: params.id</p>
            {/* Add more course details here */}
        </main>
    );
};

export default CoursePage;