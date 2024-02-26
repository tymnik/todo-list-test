import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

import  Layout  from 'Layout/Layout';

const TodoListPage = lazy(() => import('../pages/TodoListPage'));
const CompletedTasksPage = lazy(() => import('../pages/CompletedTasksPage'));
const UnfinishedTasksPage = lazy(() => import('../pages/UnfinishedTasksPage'));

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoListPage />} />
            <Route path="completed" element={<CompletedTasksPage />} />
            <Route path="unfinished" element={<UnfinishedTasksPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
