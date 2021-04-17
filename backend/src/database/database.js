const mongoose = require("mongoose");

const url =
  "mongodb+srv://root:mongosecret@mongocrud.y83gk.mongodb.net/sample_analytics?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const connectToDatabase = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(`Error connecting to database: \n${err}`));
};

module.exports = connectToDatabase;
