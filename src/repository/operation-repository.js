const { Machine, Tag } = require("../models/index");

class OperationRepository {
  async operateMachine(tags) {
    try {
      const machines = await Machine.findAll({
        include: [
          {
            model: Tag,
            as: "tags",
            where: { name: tags },
            required: true,
          },
        ],
      });

      return machines;

     
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = OperationRepository;
