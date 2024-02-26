import React from 'react';

import TodoForm from 'components/TodoForm/TodoForm';
import TodoList from 'components/TodoList/TodoList';
    
const TodoListPage = () => {

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoListPage;
