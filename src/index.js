import dotenv from "dotenv";
import connectDB from "./db/db_config.js";

dotenv.config({
  path: "./env",
});
connectDB();
