const { ClusterService } = require("../services");

const clusterService = new ClusterService();

class ClusterController {
  async create(req, res) {
    try {
      const cluster = await clusterService.createClustor(req.body);
      res.status(201).json({
        data: cluster,
        message: "sucessfully created the cluster",
        success: true,
        error: {},
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }

  async get(req, res) {
    try {
      const cluster = await clusterService.getCluster(req.params.clusterId);

      res.status(200).json({
        data: cluster,
        message: "sucessfully fetched the cluster",
        success: true,
        error: {},
      });
    } catch (error) {
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: {},
      });
    }
  }
  async getAll(req, res) {
    try {
      const cluster = await clusterService.getAllCluster();

      res.status(200).json({
        data: cluster,
        message: "sucessfully fetched all the cluseter",
        success: true,
        error: {},
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: {},
      });
    }
  }

  async deleteCluster(req, res) {
    const clusterId = req.params.clusterId;
    try {
      const cluster = await clusterService.deleteCluster(clusterId);
      res.status(201).json({
        data: cluster,
        message: "sucessfully deleted the cluster",
        success: true,
        error: {},
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }

  async createMachine(req, res) {
    const { clusterId } = req.params;
    const { name, ipAddress, instanceType, tags } = req.body;
    if (!name || !ipAddress || !instanceType) {
      throw new Error("all field is required");
    }

    try {
      const machine = await clusterService.createMachine({
        name,
        ipAddress,
        instanceType,
        tags,
        clusterId,
      });
      res.status(201).json({
        message: "sucessfully created machine",
        success: true,
        error: {},
        data: machine,
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }
  async listMachine(req, res) {
    const { clusterId } = req.params;

    try {
      const machine = await clusterService.listMachine(clusterId);
      res.status(200).json({
        message: "sucessfully fetched the machine",
        success: true,
        error: {},
        data: machine,
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }

  //delete machine
  async deleteMachine(req, res) {
    const { machineId } = req.params;
    try {
      const machine = await clusterService.deleteMachine(machineId);
      res.status(200).json({
        message: "sucessfully deleted the machine",
        success: true,
        error: {},
        data: machine,
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }
}

module.exports = ClusterController;
