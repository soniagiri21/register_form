// Import dotenv for loading environment variables from a .env file
import dotenv from "dotenv";

// Import the database connection function
import connectDB from "./db/db_config.js";

// Import the Express app instance
import { app } from "./app.js";

// Configure dotenv to load environment variables from the specified file
dotenv.config({
  path: "./env", // Path to the .env file
});

// Set the port for the server, defaulting to 8000 if not specified in the .env file
const port = process.env.PORT || 8000;

// Connect to the MongoDB database
connectDB()
  .then(() => {
    // Start the Express server after a successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    // Log an error message if the database connection fails
    console.log("MongoDB connection failed !!! ", err);
  });
