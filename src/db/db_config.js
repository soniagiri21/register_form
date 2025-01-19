// Import mongoose for database interaction
import mongoose from "mongoose";

// Import the constant for the database name from constants.js
import { DB_NAME } from "../constants.js";

// Define the MongoDB URI, either from the environment variable or default to localhost
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

/**
 * Function to connect to MongoDB using Mongoose.
 *
 * This function establishes a connection to the MongoDB database and logs the status.
 * It also sets Mongoose debug mode in development and handles connection errors.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}` // MongoDB URI + database name from constants.js
    );

    // Log the successful connection details
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`,
      {
        useNewUrlParser: true, // Use the new URL parser for MongoDB connection
        useUnifiedTopology: true, // Use the unified topology engine
        useFindAndModify: false, // Avoid deprecation warnings for findAndModify
        useCreateIndex: true, // Ensure index creation functionality is enabled
      }
    );

    // Enable Mongoose debug mode if the environment is 'development'
    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", true);
    }
  } catch (error) {
    // Catch any connection errors and log them
    console.log("MongoDB connection error: ", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

// Export the connectDB function to be used elsewhere in the app
export default connectDB;
