import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategorySearchSelector from 'components/CategorySearchSelector/CategorySearchSelector';
import Task from 'components/Task/Task';
import { getTasks } from '../store/selectors';

const UnfinishedTasksPage = () => {
  const tasks = useSelector(getTasks);
  const [searchQuery, setSearchQuery] = useState('');

  const unfinishedTasks = tasks.filter(
    task =>
      !task.completed &&
      task.text.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <CategorySearchSelector
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <h2>Unfinished tasks</h2>
      {unfinishedTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default UnfinishedTasksPage;
