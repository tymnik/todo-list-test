import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../store/actions';

import styles from './TodoForm.module.css';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('work');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTask({ name, description, dueDate, category }));
    setName('');
    setDescription('');
    setDueDate('');
    setCategory('work');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputTitle">Task</label>
        <input
          id="inputTitle"
          className={styles.field}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name your task..."
          required
        />
      </div>
      <div>
        <label htmlFor="inputDescription">Description</label>
        <input
          id="inputDescription"
          className={styles.field}
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter some details..."
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <button type="submit">Add task</button>
    </form>
  );
};

export default TodoForm;
