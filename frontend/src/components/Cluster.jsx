import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import AddCluster from "./AddCluster";

const Cluster = ({ showModal, setShowModal }) => {
  const [cluster, setCluster] = useState([]);
  const [data, setData] = useState(null);

  //getting data from backend
  const fetchCluster = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/clusters`
      );
      if (res.data.data) {
        setCluster(res?.data?.data);
      }
    } catch (error) {
      alert(error);
    }
  };
  const addCluster = async (clusterName, cloudRegion) => {
    const data = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/clusters`,
      {
        name: clusterName,
        cloudRegion,
      }
    );
    if (data.data) {
      setData(data);
    }
  };

  useEffect(() => {
    fetchCluster();
  }, [data]);

  const deleteTask = async (id) => {
    const data = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/v1/clusters/${id}`
    );
    if (data.data) {
      setData(data);
    }
    // dispatch(removeItems(id));
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center">clusters</h1>

        <TaskList cluster={cluster} deleteTask={deleteTask} />
      </div>

      {showModal && (
        <AddCluster addCluster={addCluster} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Cluster;
