import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask, toggleCompleted } from '../../store/tasksSlice';

import styles from './Task.module.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <div>
        <p className={styles.text}>
          {task.text.name}: {task.text.description || 'No Description'}
        </p>
      </div>
      <button className={styles.btn} onClick={handleDelete}>
        close
      </button>
    </div>
  );
};

export default Task;