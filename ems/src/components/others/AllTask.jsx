import { useState, useEffect } from "react";

function AllTask() {
  const [tasksByEmployee, setTasksByEmployee] = useState({});

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasksByEmployee")) || {};
    setTasksByEmployee(savedTasks);
  }, []);

  return (
    <div className="w-[30%] flex justify-end flex-shrink-0">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-xl font-bold text-emerald-400 mb-4">All Tasks</h2>

        <div className="max-h-[400px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {Object.keys(tasksByEmployee).length === 0 ? (
            <p className="text-gray-400 text-center">No tasks assigned yet.</p>
          ) : (
            Object.entries(tasksByEmployee).map(([employeeName, tasks]) => (
              <div key={employeeName} className="mb-4">
                <h3 className="text-lg font-semibold text-emerald-300">{employeeName}</h3>

                {tasks.length === 0 ? (
                  <p className="text-gray-400">No tasks assigned.</p>
                ) : (
                  tasks.map((task, index) => {
                    let status = "Pending";
                    let statusColor = "text-yellow-400";

                    if (task.completed) {
                      status = "Completed";
                      statusColor = "text-green-400";
                    } else if (task.failed) {
                      status = "Failed";
                      statusColor = "text-red-400";
                    } else if (task.active) {
                      status = "In Progress";
                      statusColor = "text-blue-400";
                    } else if (task.newTask) {
                      status = "New";
                      statusColor = "text-purple-400";
                    }

                    return (
                      <div key={index} className="p-4 bg-gray-700 rounded-lg mt-2">
                        <h4 className="text-lg font-semibold text-white">{task.taskTitle}</h4>
                        <p className="text-sm text-gray-400">{task.taskDescription}</p>
                        <p className="text-sm text-gray-400">Due Date: {task.taskDate || "N/A"}</p>
                        <span className={`text-sm font-semibold ${statusColor}`}>Status: {status}</span>
                      </div>
                    );
                  })
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AllTask;