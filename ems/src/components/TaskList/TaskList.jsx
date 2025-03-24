import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div id='taskList' className="h-[55%] w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 mt-10">
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} data={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={index} data={elem} />;
        }

        if (elem.completed) {
          return <CompleteTask key={index} data={elem} />;
        }

        if (elem.failed) {
          return <FailedTask key={index} data={elem} />;
        }

        return null; // Return null if no condition matches
      })}
    </div>
  );
}

export default TaskList;