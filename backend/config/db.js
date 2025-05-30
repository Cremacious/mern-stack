import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }
    await mongoose.connect(uri);
    console.log('Mongo Connected');
  } catch (error) {
    console.log(error);
  }
};
