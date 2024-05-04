"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MachineTags", {
      machineId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Machines",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      tagId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Tags",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MachineTags");
  },
};
