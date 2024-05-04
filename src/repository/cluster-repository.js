const { Cluster } = require("../models/index");
const db = require("../models");

class ClusterRepository {
  async createCluster({ name, cloudRegion }) {
    try {
      const cluster = await Cluster.create({ name, cloudRegion });
      return cluster;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async deleteCluster(clusterId) {
    try {
      console.log(clusterId);
      await Cluster.destroy({
        where: {
          id: clusterId,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async getCluster(clusterId) {
    try {
      const cluster = await Cluster.findByPk(clusterId);
      return cluster;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCluster() {
    try {
      const cluster = await Cluster.findAll();
      return cluster;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
  async createMachine({ name, ipAddress, instanceType, tags, clusterId }) {
    try {
      const result = await db.sequelize.transaction(async (t) => {
        const newMachine = await db.Machine.create(
          {
            name,
            ipAddress,
            instanceType,
            clusterId,
          },
          { transaction: t }
        );

        if (tags && tags.length) {
          await Promise.all(
            tags.map(async (tag) => {
              const [tagInstance] = await db.Tag.findOrCreate({
                where: { name: tag },
                defaults: { name: tag },
                transaction: t,
              });
              await newMachine.addTag(tagInstance, { transaction: t });
            })
          );
        }

        return newMachine;
      });

      const machineWithTags = await db.Machine.findByPk(result.id, {
        include: [
          {
            model: db.Tag,
            as: "tags",
          },
        ],
      });

      return machineWithTags;
    } catch (error) {
      return { error };
    }
  }
  async listMachine(clusterId) {
    try {
      const machines = await db.Machine.findAll({
        where: { clusterId: clusterId },
        include: [
          {
            model: db.Tag,
            as: "tags",
          },
        ],
      });

      return machines;
    } catch (error) {
      console.log("here ", error);
      throw { error };
    }
  }
  async deleteMachine(machineId) {
    try {
      const machine = await db.Machine.findByPk(machineId);
      if (!machine) {
        throw new Error("Machine not found.");
      }

      await machine.destroy();
      return true;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = ClusterRepository;
