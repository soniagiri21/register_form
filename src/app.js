import express, { urlencoded } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json({ limit: "16kb" }));
app.use(express(urlencoded({ extended: true, limit: "16kb" })));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("home"); // Assuming you're using a view engine like EJS or Pug
});

export { app };
