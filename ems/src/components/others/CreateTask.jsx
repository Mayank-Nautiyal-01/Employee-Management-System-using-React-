import { useState } from "react";

function CreateTask() {
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    assignTo: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.taskTitle.trim() || !formData.assignTo.trim()) {
      alert("Task title and assignee name are required!");
      return;
    }

    const newTask = {
      taskTitle: formData.taskTitle,
      taskDescription: formData.taskDescription,
      taskDate: formData.taskDate,
      category: formData.category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    const employeeName = formData.assignTo.trim();

    // Retrieve existing tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem("tasksByEmployee")) || {};

    // Update tasks for the specific employee
    const updatedTasks = {
      ...savedTasks,
      [employeeName]: [...(savedTasks[employeeName] || []), newTask],
    };

    // Update local storage
    localStorage.setItem("tasksByEmployee", JSON.stringify(updatedTasks));

    // Clear form data
    setFormData({
      taskTitle: "",
      taskDescription: "",
      taskDate: "",
      assignTo: "",
      category: "",
    });
  };

  return (
    <div className="w-[70%] bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-emerald-400 mb-4">Create a New Task</h2>

      <form onSubmit={submitHandler} className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-semibold text-gray-300">Task Title</label>
          <input
            type="text"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
            placeholder="Write task title.."
            className="w-full p-1.5 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-emerald-400 text-base"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-300">Description</label>
          <textarea
            name="taskDescription"
            rows="3"
            value={formData.taskDescription}
            onChange={handleChange}
            placeholder="Enter task description..."
            className="w-full p-1.5 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-emerald-400 resize-none text-base"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-semibold text-gray-300">Date</label>
            <input
              type="date"
              name="taskDate"
              value={formData.taskDate}
              onChange={handleChange}
              className="w-full p-1.5 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-emerald-400 text-base"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-300">Assign To</label>
            <input
              type="text"
              name="assignTo"
              value={formData.assignTo}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="w-full p-1.5 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-emerald-400 text-base"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-300">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Design, Dev, etc."
            className="w-full p-1.5 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-emerald-400 text-base"
          />
        </div>

        <button className="w-[30%] py-2 px-3 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 transition duration-300 text-x mx-auto tracking-wide mt-4">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;