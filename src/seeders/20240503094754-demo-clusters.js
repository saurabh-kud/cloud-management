"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Clusters",
      [
        {
          name: "North American Data Center",
          cloudRegion: "us-west-1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "European Data Center",
          cloudRegion: "eu-central-1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clusters", null, {});
  },
};
