import React from 'react';

import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';

import styles from './TodoListPage.module.css';

const TodoListPage = () => {
  return (
    <section className={styles.pageSection}>
      <h2 className={styles.heading}>Create new task</h2>
      <TodoForm />
      <TodoList />
    </section>
  );
};

export default TodoListPage;
