import mongoose from 'mongoose';
import app from './app';
import config from './config/config';
import connectDB from './config/db';

async function main() {
  try {
    // await mongoose.connect(config.databaseUrl as string);
    await connectDB()
    console.log('MongoDB connected succesfully with Atlas');
    
    app.listen(config.port, () => {
      console.log(`EduNest server listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main(); 