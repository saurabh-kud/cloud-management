import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Machine from "./components/Machine";
import Cluster from "./components/Cluster";
import Operation from "./components/Operation";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-haiti-950 to-90%  min-h-screen text-purple-heart-200 font-sans">
                  <header className="bg-gray-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                      <Link to="/">
                        <h1 className="text-3xl font-bold">
                          cloud machine management
                        </h1>
                      </Link>
                      <div className="flex items-center">
                        <button
                          className="px-4 py-2 bg-purple-heart-500 text-white rounded hover:bg-purple-heart-600 focus:outline-none transition duration-300"
                          onClick={() => {
                            setShowModal(true);
                          }}
                        >
                          Add New Cluster
                        </button>
                      </div>
                    </div>
                  </header>

                  <Cluster showModal={showModal} setShowModal={setShowModal} />

                  <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-bold text-center">
                      operation on machine
                    </h1>
                    <Operation />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/machines/:machineId"
            element={
              <>
                <div className="bg-haiti-950 to-90%  min-h-screen text-purple-heart-200 font-sans">
                  <header className="bg-gray-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                      <h1 className="text-3xl font-bold">
                        <Link to="/">
                          <h1 className="text-3xl font-bold">
                            cloud machine management
                          </h1>
                        </Link>
                      </h1>
                      <div className="flex items-center">
                        <button
                          className="px-4 py-2 bg-purple-heart-500 text-white rounded hover:bg-purple-heart-600 focus:outline-none transition duration-300"
                          onClick={() => {
                            setShowModal1(true);
                          }}
                        >
                          Add New Machine
                        </button>
                      </div>
                    </div>
                  </header>

                  <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-bold text-center">machines</h1>
                    <Machine
                      showModal1={showModal1}
                      setShowModal1={setShowModal1}
                    />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
