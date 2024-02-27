import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategorySearchSelector from 'components/CategorySearchSelector/CategorySearchSelector';
import Task from 'components/Task/Task';
import { getTasks, getStatusFilter } from '../../store/selectors';
import { statusFilters } from '../../store/constants';

import styles from './TodoList.module.css';

const getVisibleTasks = (tasks, statusFilter, searchQuery) => {
  return tasks.filter(task => {
    const matchesStatus =
      statusFilter === statusFilters.all ||
      (statusFilter === statusFilters.active && !task.completed) ||
      (statusFilter === statusFilters.completed && task.completed);
    const matchesSearch = task.text.category
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });
};

const TodoList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const [searchQuery, setSearchQuery] = useState('');

  const visibleTasks = getVisibleTasks(tasks, statusFilter, searchQuery);

  return (
    <div>
      <h3>Find your tasks by category</h3>
      <CategorySearchSelector
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul className={styles.list}>
        {visibleTasks.map(task => (
          <li className={styles.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
