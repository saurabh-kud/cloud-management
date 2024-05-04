"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "MachineTags",
      [
        {
          machineId: 1,
          tagId: 1, // Web Server 1 is in production
        },
        {
          machineId: 2,
          tagId: 2, // Database Server 1 is in development
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("MachineTags", null, {});
  },
};
