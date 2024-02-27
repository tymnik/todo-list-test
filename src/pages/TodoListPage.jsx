import React from 'react';

import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';

const TodoListPage = () => {
  return (
    <>
      <h2>Create new task</h2>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoListPage;
