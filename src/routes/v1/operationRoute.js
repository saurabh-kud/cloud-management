const express = require("express");
const { OperationController } = require("../../controllers");
const operationRouter = express.Router();

const operationController = new OperationController();
operationRouter.post("/operations", operationController.operateMachine);

module.exports = operationRouter;
