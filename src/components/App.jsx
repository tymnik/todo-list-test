import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from 'Layout/Layout';
import Loader from './Loader/Loader';

const TodoListPage = lazy(() => import('../pages/TodoListPage'));
const CompletedTasksPage = lazy(() => import('../pages/CompletedTasksPage'));
const UnfinishedTasksPage = lazy(() => import('../pages/UnfinishedTasksPage'));

const App = () => {
  return (
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoListPage />} />
            <Route path="completed" element={<CompletedTasksPage />} />
            <Route path="unfinished" element={<UnfinishedTasksPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
  );
};

export default App;
