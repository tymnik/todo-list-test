import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategorySearchSelector from 'components/CategorySearchSelector/CategorySearchSelector';
import Task from 'components/Task/Task';
import { getTasks } from '../store/selectors';

import styles from './CompletedTasksPage.module.css'

const UnfinishedTasksPage = () => {
  const tasks = useSelector(getTasks);
  const [searchQuery, setSearchQuery] = useState('');

  const unfinishedTasks = tasks.filter(
    task =>
      !task.completed &&
      task.text.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.pageSection}>
      <div className={styles.pageWrapper}>
        <h2 className={styles.heading}>Unfinished tasks</h2>
        <CategorySearchSelector
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className={styles.filteredList}>
        {unfinishedTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default UnfinishedTasksPage;
