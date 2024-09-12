import mongoose from "mongoose";

const connectDatabase = async (url) => {
  try {
    const response = await mongoose.connect(url);
    const host = await response.connection.host;
    console.log("Database connected successfully: " + host);
  } catch (error) {
    console.log("Database connection error: " + error.message);
  }
};

export default connectDatabase;

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     console.log("mongo_uri: ", process.env.MONGO_URI);
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("Error connection to MongoDB: ", error.message);
//     process.exit(1); // 1 is failure, 0 status code is success
//   }
// };
