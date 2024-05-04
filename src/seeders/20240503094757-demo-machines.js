"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Machines",
      [
        {
          name: "Web Server 1",
          ipAddress: "192.168.0.1",
          instanceType: "t2.medium",
          clusterId: 9, // Relating to the first cluster
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Database Server 1",
          ipAddress: "192.168.0.2",
          instanceType: "r3.large",
          clusterId: 3, // Relating to the second cluster
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Machines", null, {});
  },
};
