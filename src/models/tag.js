"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // Many-to-Many relationship with Machine via MachineTag
      Tag.belongsToMany(models.Machine, {
        through: "MachineTag",
        as: "machines",
        foreignKey: "tagId",
        otherKey: "machineId",
      });
    }
  }

  Tag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );

  return Tag;
};
