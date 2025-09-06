import connectDB from "@/lib/db";
import courseModel from "@/models/courseModel";
import { NextResponse } from "next/server";

// GET all courses
export async function GET() {
  await connectDB();
  const courses = await courseModel.find();
  return NextResponse.json(courses);
}

// POST create course
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const { title, description, price, thumbnail } = body;
  const field = title || description || price || thumbnail;
  if (!field) {
    return NextResponse.json(
      { message: `Missing field ${field} ` },
      { status: 400 }
    );
  }

  const newCourse = await courseModel.create({
    title,
    description,
    price,
    thumbnail,
  });
  return NextResponse.json(newCourse, { status: 201 });
}
