const express = require("express");
const clustorRouter = require("./clustorRoute");
const operationRouter = require("./operationRoute");
const v1router = express.Router();

v1router.use("/clusters", clustorRouter);
v1router.use("/machines", operationRouter);
module.exports = v1router;
