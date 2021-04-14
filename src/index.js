const express = require("express");
const connectToDatabase = require("./database/database.js");
const customerRoutes = require("./routes/customer.routes.js");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Heyo we are on");
});

app.use("/api/v1/customers", customerRoutes);

app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Listening on port ${PORT}`);
});
