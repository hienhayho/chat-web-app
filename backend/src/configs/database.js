import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async () => {
    const options = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
    }
    await mongoose.connect(process.env.DB_HOST, options);
    console.log("Connect to database successfully");
}

export default connection;
