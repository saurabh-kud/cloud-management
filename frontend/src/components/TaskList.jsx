import { Link } from "react-router-dom";

const TaskList = ({ cluster, deleteTask }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-xl m-auto sm:p-3 p-7">
      {cluster.map((clus) => (
        <div
          key={clus.id}
          className="p-6 rounded-lg shadow-xl bg-purple-heart-950/50 border border-purple-heart-600 relative"
        >
          <Link to={`/machines/${clus.id}`}>
            <div className="flex justify-between border-b border-purple-400 mb-4 pb-4">
              <div className="flex gap-4">
                <div>
                  {" "}
                  <p className="text-lg font-semibold mb-2">{clus.name}</p>
                  <p className="text-sm text-purple-heart-300 mb-2">
                    {clus.cloudRegion}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteTask(clus.id);
                  }}
                >
                  delete cluster
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
