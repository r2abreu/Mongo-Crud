const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: String,
  name: String,
  address: String,
  birthdate: Date,
  emai: String,
  active: Boolean,
  accounts: Array,
  tier_and_details: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("Customer", customerSchema);
