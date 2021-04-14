const Customer = require("../models/customer.model.js");

exports.create = (req, res) => {};

exports.findAll = (req, res) => {
  Customer.find()
    .then((data) => console.log(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while retrieving customers",
      });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  Customer.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found customer with id ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Error retrieving customer with id ${id}` });
    });
};

exports.updateOne = (req, res) => {
  if (!req.body) {
    return res.send(400).send({
      message: "Data to update can not be empty",
    });
  }

  const { id } = req.params;
  Customer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update customer with id ${id}. Perhaps a customer was not found`,
        });
      } else {
        res.send({ message: "Customer was updated succesfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating customer with id ${id}`,
      });
    });
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;

  Customer.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete customer with id ${id}. Maybe customer was not found`,
        });
      } else {
        res.send({
          message: "Customer was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete tutorial with id ${id}`,
      });
    });
};
