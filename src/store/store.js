import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './users/reducers';
import tasksReducer from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});