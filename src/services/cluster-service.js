const { ClusterRepository } = require("../repository");

class ClusterService {
  constructor() {
    this.clusterRepository = new ClusterRepository();
  }

  async createClustor({ name, cloudRegion }) {
    try {
      const cluster = await this.clusterRepository.createCluster({
        name,
        cloudRegion,
      });
      return cluster;
    } catch (error) {
      throw { error };
    }
  }
  async deleteCluster(clusterId) {
    try {
      const response = await this.clusterRepository.deleteCluster(clusterId);
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async getCluster(clusterId) {
    try {
      const cluster = await this.clusterRepository.getCluster(clusterId);
      return cluster;
    } catch (error) {
      throw { error };
    }
  }
  async getAllCluster() {
    try {
      const cluster = await this.clusterRepository.getAllCluster();
      return cluster;
    } catch (error) {
      throw { error };
    }
  }
  async createMachine({ name, ipAddress, instanceType, tags, clusterId }) {
    try {
      const machine = await this.clusterRepository.createMachine({
        name,
        ipAddress,
        instanceType,
        tags,
        clusterId,
      });
      return machine;
    } catch (error) {
      throw { error };
    }
  }
  async listMachine(clusterId) {
    try {
      const machine = await this.clusterRepository.listMachine(clusterId);
      return machine;
    } catch (error) {
      throw { error };
    }
  }
  async deleteMachine(machineId) {
    try {
      const machine = await this.clusterRepository.deleteMachine(machineId);
      return machine;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = ClusterService;
