// /app/api/seed/route.ts
import connectDB from "@/lib/db";
import courseModel from "@/models/courseModel";
import { courses } from "@/utils/courses";
import { NextResponse } from "next/server";

export async function GET() {
  if ((process.env.NODE_ENV || "development") === "production") {
    return NextResponse.json(
      { message: "Seeding not allowed in production" },
      { status: 403 }
    );
  }

  try {
    await connectDB();
    await courseModel.deleteMany({});
    const inserted = await courseModel.insertMany(courses);
    return NextResponse.json({
      message: "Database seeded successfully",
      count: inserted.length,
      data: inserted,
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed to seed data", error });
  }
}
