import React from 'react';
import { useSelector } from 'react-redux';
import Task from 'components/Task/Task';
import { getTasks } from '../store/selectors';

const CompletedTasksPage = () => {
  const tasks = useSelector(getTasks);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default CompletedTasksPage;
