import mongoose from "mongoose";
import config from "../config/index.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongo_uri, {
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
