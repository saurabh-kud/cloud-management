const { OperationService } = require("../services");

const operationService = new OperationService();

class OperationController {
  async operateMachine(req, res) {
    try {
      const machines = await operationService.operateMachine(req.body);
      res.status(201).json({
        message: `${req.body.operation} operation performed on ${machines.length} machines.`,
        success: true,
        error: {},
        data: machines,
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }
}

module.exports = OperationController;
