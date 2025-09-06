import mongoose, { Document, Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import config from "@/lib/config";

// Define TypeScript interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  image?: string;
  role: "student" | "teacher" | "admin";
  createdAt: Date;
  updatedAt: Date;

  comparePassword(entryUserPass: string): Promise<boolean>;
}

// Schema
const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // don't return password by default
    },
    image: {
      type: String,
      default:
        "https://i.ibb.co.com/Qv2rWPVX/istockphoto-1300845620-612x612.jpg",
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
  },
  { timestamps: true }
);

// Hashing password before saving
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = bcrypt.genSaltSync(config.salt || 14);
  this.password = bcrypt.hashSync(this.password, salt);

  next();
});

// 📌 Instance method to compare password
UserSchema.methods.comparePassword = async function (
  entryUserPass: string
): Promise<boolean> {
  return await bcrypt.compare(entryUserPass, this.password);
};

// Prevent model overwrite in Next.js hot reload
export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
