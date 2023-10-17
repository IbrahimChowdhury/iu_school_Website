import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.mongo_url!);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        throw error; // Rethrow the error to propagate it further if needed
    }
}