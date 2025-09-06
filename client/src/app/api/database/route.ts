import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";

export async function GET() {
  try {
    await connectDB();

    // MongoDB connection state
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    const state = mongoose.connection.readyState;

    if (state === 1) {
      return NextResponse.json({ message: "Connected to MongoDB" });
    } else {
      return NextResponse.json(
        { message: "MongoDB connection not established", state },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error connecting to MongoDB", error: error.message },
      { status: 500 }
    );
  }
}
