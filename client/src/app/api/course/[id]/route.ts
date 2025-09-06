import connectDB from "@/lib/db";
import courseModel from "@/models/courseModel";
import { NextResponse } from "next/server";

// GET single course
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const course = await courseModel.findById(params.id);
  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
}

// PUT update course
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const body = await req.json();
  const id = params.id
  const updated = await courseModel.findByIdAndUpdate(id, body, { new: true });
  if (!updated) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}

// DELETE course
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const deleted = await courseModel.findByIdAndDelete(params.id);
  if (!deleted) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Course deleted successfully" });
}
