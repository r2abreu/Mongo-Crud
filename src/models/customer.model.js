const mongoose = require("mongoose");
const customerSchema = require("../schemas/customer.schema.js");

const CustomerModel = mongoose.model("Customer", customerSchema);

const customerExample = {
  username: "r2abreu",
  name: "Arturo Abreu",
  address: "Santa Rosalia",
  birthdate: new Date(1993, 2, 10),
  active: true,
  accounts: ["github", "gitlab"],
  tier_and_details: {
    this: "is an example",
  },
};

const customerInstance = new CustomerModel(customerExample);

module.exports = customerInstance;
