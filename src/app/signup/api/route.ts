import connectDB from "@/lib/db";
import { User } from "@/models/userModel";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    console.log("Received sign-up data:", body);
    const { name, email, password, image, role } = body;

    await connectDB();

    // Checking if user already exists
    const existingUser = await User.findOne({ email });
    console.log("Existing user check:", existingUser);
    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User already exists with this email",
        }),
        { status: 409 } // 409 Conflict
      );
    }

    // Creating new user
    const newUser = await User.create({ name, email, password, image, role });
    return new Response(
      JSON.stringify({
        success: true,
        message: "User Created Successfully",
        data: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing sign-up:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
