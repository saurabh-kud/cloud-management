"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cluster extends Model {
    static associate(models) {
      // One-to-many relationship with Machine
      Cluster.hasMany(models.Machine, {
        foreignKey: "clusterId",
        as: "machines",
        onDelete: "CASCADE",
      });
    }
  }

  Cluster.init(
    {
      name: DataTypes.STRING,
      cloudRegion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cluster",
    }
  );

  return Cluster;
};
