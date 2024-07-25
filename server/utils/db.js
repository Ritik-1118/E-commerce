import mongoose from 'mongoose';
import env from "dotenv";
env.config()

export const connectDB = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URL );
        console.log( 'MongoDB connected' );
    } catch ( error ) {
        console.error( 'Error connecting to MongoDB:', error.message );
        process.exit( 1 );
    }
};