import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "America2004",
  database: "RecipeDatabase",
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});

// Fetch recipes
app.get("/recipes", (req, res) => {
  const q = "SELECT * FROM recipes LIMIT 50";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

// Fetch nutrition
app.get("/nutrition", (req, res) => {
  const q = "SELECT * FROM nutrition LIMIT 50";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

// Fetch ingredients
app.get("/ingredients", (req, res) => {
  const q = "SELECT * FROM ingredients LIMIT 50";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

// Fetch instructions
app.get("/instructions", (req, res) => {
  const q = "SELECT * FROM instructions LIMIT 50";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
