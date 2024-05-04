const express = require("express");
const { ClusterController } = require("../../controllers");
const clustorRouter = express.Router();

const clusterController = new ClusterController();
clustorRouter.get("/", clusterController.getAll);
clustorRouter.get("/:clusterId", clusterController.get);
clustorRouter.post("/", clusterController.create);
clustorRouter.delete("/:clusterId", clusterController.deleteCluster);
clustorRouter.post("/:clusterId/machines", clusterController.createMachine);
clustorRouter.get("/:clusterId/machines", clusterController.listMachine);
clustorRouter.delete("/machines/:machineId", clusterController.deleteMachine);

module.exports = clustorRouter;
