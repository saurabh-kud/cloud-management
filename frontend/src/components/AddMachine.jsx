import { useState, useEffect } from "react";

const AddMachine = ({ addMachine, setShowModal1 }) => {
  const [formData, setFormData] = useState({
    machineName: "",
    instanceType: "",
    ipAddress: "",
    tags: "",
  });

  const { machineName, instanceType, ipAddress, tags } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCluster = () => {
    if (
      formData.machineName.trim() === "" ||
      formData.instanceType.trim() === "" ||
      formData.ipAddress.trim() === "" ||
      formData.tags.trim() === ""
    ) {
      alert("Please fill in all fields before adding a machine.");
      return;
    }

    addMachine(machineName, instanceType, ipAddress, tags);
    setFormData({
      machineName: "",
      instanceType: "",
      ipAddress: "",
      tags: "",
    });

    //function to handle task
    setShowModal1(false);
  };

  return (
    <div className="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center">
      <div className="bg-purple-heart-950 p-8 rounded-lg w-1/2 text-purple-heart-200">
        <h2 className="text-2xl font-bold mb-4">Add New Machine</h2>
        <input
          type="text"
          placeholder="North America - Production"
          className="w-full px-4 py-2 mb-4 border bg-transparent border-purple-heart-700 rounded focus:outline-none"
          name="machineName"
          value={formData.machineName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="t2.micro"
          className="w-full px-4 py-2 mb-4 border bg-transparent border-purple-heart-700 rounded focus:outline-none"
          name="instanceType"
          value={formData.instanceType}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="192.168.10.2"
          className="w-full px-4 py-2 mb-4 border bg-transparent border-purple-heart-700 rounded focus:outline-none"
          name="ipAddress"
          value={formData.ipAddress}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="production, development"
          className="w-full px-4 py-2 mb-4 border bg-transparent border-purple-heart-700 rounded focus:outline-none"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-purple-heart-500 text-white rounded hover:bg-purple-heart-600 focus:outline-none mr-2 transition duration-300 ease-in-out"
            onClick={handleAddCluster}
          >
            Add Machine
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
            onClick={() => setShowModal1(false)}
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default AddMachine;
