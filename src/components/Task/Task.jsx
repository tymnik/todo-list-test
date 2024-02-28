import React from 'react';
import { useDispatch } from 'react-redux';
import { FcFullTrash, FcApproval } from 'react-icons/fc';

import { deleteTask, toggleCompleted } from '../../store/tasksSlice';

import styles from './Task.module.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxBlock}>
        {!task.completed && <p className={styles.checkboxLabel}>Done</p>}
        <div className={styles.checkboxWrapper}>
          {task.completed ? (
            <FcApproval
              className={styles.checkboxIconChecked}
              onClick={handleToggle}
              style={{ fontSize: '20px' }}
            />
          ) : (
            <div className={styles.checkbox} onClick={handleToggle}></div>
          )}
        </div>
      </div>
      <div className={styles.taskDetails}>
        <div>
          <p className={styles.nameText}>
            <strong>Task:</strong> {task.text.name}
          </p>
          <p className={styles.descriptionText}>
            <strong>Description:</strong>{' '}
            {task.text.description || 'No Description'}
          </p>
          <p className={styles.dateText}>{task.text.dueDate}</p>
        </div>
      </div>
      <div className={styles.taskAdditional}>
        <p className={styles.categoryText}>{task.text.category}</p>
        <button className={styles.btn} onClick={handleDelete}>
          <FcFullTrash style={{ fontSize: '20px' }} />
        </button>
      </div>
    </div>
  );
};

export default Task;
