import mongoose from "mongoose";

let connected = false;
const mongoURl=""
const connectDB = async () => {
    mongoose.set('strictQuery', true);  // verifies that fields in our schema are being used

    // If DB connected dont connect again
    if (connected) {
        console.log('MongoDB already Connected...')
        return;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        connected = true;
        console.log(`MongoDB Connected: ${conn?.connection?.db?.databaseName}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;