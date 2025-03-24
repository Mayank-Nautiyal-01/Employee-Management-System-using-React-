import React from 'react';

function TaskListNumber({ data }) {
  // Calculate task numbers based on the tasks array
  const taskNumbers = {
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0,
  };

  data.tasks.forEach(task => {
    if (task.newTask) taskNumbers.newTask++;
    if (task.completed) taskNumbers.completed++;
    if (task.active) taskNumbers.active++;
    if (task.failed) taskNumbers.failed++;
  });

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;