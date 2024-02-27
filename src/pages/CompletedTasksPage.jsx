import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategorySearchSelector from 'components/CategorySearchSelector/CategorySearchSelector';
import Task from 'components/Task/Task';
import { getTasks } from '../store/selectors';

const CompletedTasksPage = () => {
  const tasks = useSelector(getTasks);
  const [searchQuery, setSearchQuery] = useState('');

  const completedTasks = tasks.filter(
    task =>
      task.completed &&
      task.text.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <CategorySearchSelector
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <h2>Completed tasks</h2>
      {completedTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default CompletedTasksPage;
