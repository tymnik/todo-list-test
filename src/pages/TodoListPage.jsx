import React from 'react';

import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';

const TodoListPage = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoListPage;
