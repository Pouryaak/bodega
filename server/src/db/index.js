import mongoose from "mongoose";
import config from "../config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
