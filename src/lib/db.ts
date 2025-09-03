import config from "./config";
import mongoose from "mongoose";

declare global {
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const uri = config.databaseUrl as string;

if (!uri) {
  throw new Error(
    "MONGODB_URI environment variable Not Found inside .env.local"
  );
}

let cached = global.mongooseCache;

async function connectDB() {
  if (!cached) {
    cached = global.mongooseCache = { conn: null, promise: null };
  }
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default connectDB;
