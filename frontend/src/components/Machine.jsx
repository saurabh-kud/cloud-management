import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddMachine from "./AddMachine";

const Machine = ({ showModal1, setShowModal1 }) => {
  const params = useParams();
  const [machine, setMachine] = useState([]);
  const [data, setData] = useState(null);

  //getting data from backend

  const fetchMachine = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/clusters/${
          params.machineId
        }/machines`
      );
      if (res.data.data) {
        setMachine(res?.data?.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchMachine();
  }, [data]);

  const addMachine = async (machineName, instanceType, ipAddress, tags) => {
    const data = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/clusters/${params.machineId}/machines`,
      {
        name: machineName,
        instanceType,
        ipAddress,
        tags: tags.split(",").map((word) => word.trim()),
      }
    );
    if (data.data) {
      setData(data);
    }
  };

  const deleteTask = async (id) => {
    const data = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/v1/clusters/machines/${id}`
    );

    if (data.data) {
      setData(data);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-xl m-auto sm:p-3 p-7">
        {machine.length == 0 && (
          <h1 className="text-center text-3xl">no machine found</h1>
        )}

        {machine.map((clus) => (
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
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  class="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => deleteTask(clus.id)}
                >
                  delete machine
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal1 && (
        <AddMachine addMachine={addMachine} setShowModal1={setShowModal1} />
      )}
    </>
  );
};

export default Machine;
