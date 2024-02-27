import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategorySearchSelector from 'components/CategorySearchSelector/CategorySearchSelector';
import Task from 'components/Task/Task';
import { getTasks } from '../store/selectors';

import styles from './CompletedTasksPage.module.css';

const CompletedTasksPage = () => {
  const tasks = useSelector(getTasks);
  const [searchQuery, setSearchQuery] = useState('');

  const completedTasks = tasks.filter(
    task =>
      task.completed &&
      task.text.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.pageSection}>
      <div className={styles.pageWrapper}>
        <h2 className={styles.heading}>Completed tasks</h2>
        <CategorySearchSelector
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className={styles.filteredList}>
        {completedTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default CompletedTasksPage;
