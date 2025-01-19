import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

// Resolve __dirname in ES modules
// `fileURLToPath` converts the current module's URL to a file path
// `dirname` gets the directory name of the resolved file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse JSON data with a size limit of 16KB
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded data with extended option and a size limit of 16KB
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Set EJS as the view engine to render dynamic HTML templates
app.set("view engine", "ejs");

// Specify the directory where the view templates (EJS files) are located
app.set("views", path.join(__dirname, "../views"));

// Serve static files (like CSS, JS, images) from the "public" directory
app.use(express.static(path.join(__dirname, "../public")));

// Define the root route
// Renders the "home.ejs" template located in the "views" directory
app.get("/", (req, res) => {
  res.render("home");
});

// Export the app instance for use in other files (e.g., server setup)
export { app };
