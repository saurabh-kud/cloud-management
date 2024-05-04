"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MachineTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here if needed, typically not necessary unless there are extra fields or specific behaviors
    }
  }

  MachineTag.init(
    {
      machineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Machine", // Note: This should match the table name as Sequelize sees it, usually the plural
          key: "id",
        },
        primaryKey: true,
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Tag", // Note: This should match the table name as Sequelize sees it, usually the plural
          key: "id",
        },
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "MachineTag",
      timestamps: false, // Set to true if you need createdAt and updatedAt
    }
  );

  return MachineTag;
};
