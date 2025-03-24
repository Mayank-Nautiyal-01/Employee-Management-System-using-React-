import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
function AdminDashboard(props) {
  return (
    <div className="text-white min-h-screen p-5 w-full bg-gray-900">
      {/* Header */}
      <Header changeUser={props.changeUser} />

      <div className="flex min-h-screen bg-gray-900 p-8 gap-6">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
}

export default AdminDashboard;
