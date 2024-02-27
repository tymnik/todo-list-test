import React from 'react';
import { useSelector } from 'react-redux';
import Task from 'components/Task/Task';
import { getTasks } from '../store/selectors';

const UnfinishedTasksPage = () => {
  const tasks = useSelector(getTasks);
  const unfinishedTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <h2>Unfinished Tasks</h2>
      {unfinishedTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default UnfinishedTasksPage;
