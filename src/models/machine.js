"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Machine extends Model {
    static associate(models) {
      // Belongs to Cluster
      Machine.belongsTo(models.Cluster, {
        foreignKey: "clusterId",
        as: "cluster",
      });

      // Many-to-Many relationship with Tag via MachineTag
      Machine.belongsToMany(models.Tag, {
        through: "MachineTag",
        as: "tags",
        foreignKey: "machineId",
        otherKey: "tagId",
      });
    }
  }

  Machine.init(
    {
      name: DataTypes.STRING,
      ipAddress: DataTypes.STRING,
      instanceType: DataTypes.STRING,
      clusterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Machine",
    }
  );

  return Machine;
};
