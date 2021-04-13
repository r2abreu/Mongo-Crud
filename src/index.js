import express from "express";
import connectToDatabase from "./database/database.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  connectToDatabase();
  res.send("Heyo we are on");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
