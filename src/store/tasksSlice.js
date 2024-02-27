import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      const updatedTasks = state.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    },
    toggleCompleted(state, action) {
      const taskId = action.payload;
      const updatedTasks = state.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    },
    setDueDate(state, action) {
      const { taskId, dueDate } = action.payload;
      const updatedTasks = state.map(task =>
        task.id === taskId ? { ...task, dueDate } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, setDueDate } =
  tasksSlice.actions;
export default tasksSlice.reducer;
