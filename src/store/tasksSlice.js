import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, text, description, completed } = action.payload;
        state.push({ id, text, description, completed });
      },
      prepare(text, description) {
        return {
          payload: {
            id: nanoid(),
            text,
            description,
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      return state.filter(task => task.id !== taskId);
    },
    toggleCompleted(state, action) {
      const taskId = action.payload;
      const task = state.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;
