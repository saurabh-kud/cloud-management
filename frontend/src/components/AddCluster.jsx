import { useState, useEffect } from "react";

const AddCluster = ({ addCluster, setShowModal }) => {
  const [formData, setFormData] = useState({
    clusterName: "",
    cloudRegion: "",
  });
  const { clusterName, cloudRegion } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCluster = async () => {
    if (
      formData.clusterName.trim() === "" ||
      formData.cloudRegion.trim() === ""
    ) {
      alert("Please fill in all fields before adding a cluster.");
      return;
    }

    addCluster(clusterName, cloudRegion);
    setFormData({
      clusterName: "",
      cloudRegion: "",
    });

    //function to handle task
    setShowModal(false);
  };

  return (
    <div className="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center">
      <div className="bg-purple-heart-950 p-8 rounded-lg w-1/2 text-purple-heart-200">
        <h2 className="text-2xl font-bold mb-4">Add New Cluster</h2>
        <input
          type="text"
          placeholder="North America - Production"
          className="w-full px-4 py-2 mb-4 border bg-transparent border-purple-heart-700 rounded focus:outline-none"
          name="clusterName"
          value={formData.clusterName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="us-west-1"
          className="w-full px-4 py-2 mb-4 border bg-transparent border-purple-heart-700 rounded focus:outline-none"
          name="cloudRegion"
          value={formData.cloudRegion}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-purple-heart-500 text-white rounded hover:bg-purple-heart-600 focus:outline-none mr-2 transition duration-300 ease-in-out"
            onClick={handleAddCluster}
          >
            Add Cluster
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCluster;
