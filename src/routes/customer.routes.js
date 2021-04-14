const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer.controller.js");

router.get("/", customerController.findAll);

router.get("/:id", customerController.findOne);

router.post("/", customerController.create);

router.post("/:id", customerController.updateOne);

router.delete("/:id", customerController.deleteOne);

module.exports = router;
