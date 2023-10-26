import mongoose from 'mongoose';
require('dotenv').config

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string);
    console.log('Connected to Database');
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB;