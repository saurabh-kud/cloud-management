const { OperationRepository } = require("../repository");

class OperationService {
  constructor() {
    this.operationRepository = new OperationRepository();
  }

  async operateMachine({ operation, tags }) {
    if (!operation || !tags.length) {
      throw new Error("Operation and tags must be specified.");
    }
    try {
      const machine = await this.operationRepository.operateMachine(tags);
      return machine;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = OperationService;
