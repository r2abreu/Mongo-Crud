const express = require("express");
const connectToDatabase = require("./database/database.js");
const customerInstance = require("./models/customer.model.js");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  connectToDatabase();
  console.log({ customerInstance });
  customerInstance.save();
  res.send("Heyo we are on");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
