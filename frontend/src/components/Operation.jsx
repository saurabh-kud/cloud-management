import axios from "axios";
import React, { useState } from "react";

const Operation = () => {
  const [tags, setTags] = useState("");
  const [operation, setOperation] = useState("start"); // Default to "start"
  const [operationData, setOperationData] = useState([]);
  const [message, setMessage] = useState("");
  const [current, setCurrent] = useState(null);
  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedTags = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    const formData = {
      operation,
      tags: formattedTags,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/machines/operations`,
        formData
      );
      if (res.data) {
        setOperationData(res.data.data);

        setMessage(res.data.message);
        setCurrent(operation);
      }
      setTags("");
      setOperation("start");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[80%] mx-auto">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tags (separated by commas)
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="production,development"
              required
              value={tags}
              onChange={handleTagsChange}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              checked={operation === "start"}
              onChange={handleOperationChange}
              id="start"
              type="radio"
              value="start"
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="start"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Start
            </label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              checked={operation === "stop"}
              onChange={handleOperationChange}
              id="stop"
              type="radio"
              value="stop"
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="stop"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Stop
            </label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              checked={operation === "reboot"}
              onChange={handleOperationChange}
              id="reboot"
              type="radio"
              value="reboot"
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="reboot"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Reboot
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="text-center mt-10 text">
        <h1 className="text-5xl">{message}</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-xl m-auto sm:p-3 p-7 mt-10">
        {operationData.map((clus) => (
          <div
            key={clus.id}
            className="p-6 rounded-lg shadow-xl bg-purple-heart-950/50 border border-purple-heart-600 relative"
          >
            <div className="flex justify-between border-b border-purple-400 mb-4 pb-4">
              <div className="flex gap-4">
                <div>
                  {" "}
                  <p className="text-lg font-semibold mb-2">
                    Machine Name: {clus.name}
                  </p>
                  <p className="text-sm text-purple-heart-300 mb-2">
                    Instance Type: {clus.instanceType}
                  </p>
                  <p className="text-sm text-purple-heart-300 mb-2">
                    IP Address: {clus.ipAddress}
                  </p>
                  <p className="text-sm text-purple-heart-300 mb-2">
                    tags:
                    {clus.tags.map((tag) => {
                      return (
                        <span
                          key={tag.id}
                          className=" bg-slate-600 p-1 rounded-sm mr-2"
                        >
                          {" " + tag.name + "   "}
                        </span>
                      );
                    })}
                  </p>
                  <div
                    className={`p-3 mt-3 rounded ${
                      current == "start" ? "bg-indigo-400" : "bg-red-600"
                    }`}
                  >
                    {current}ed
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Operation;
