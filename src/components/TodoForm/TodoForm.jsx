import { useState } from 'react';
import { useDispatch } from 'react-redux';

import CategorySearchSelector from 'components/CategorySearchSelector/CategorySearchSelector';
import { Button } from 'components/Button/Button';
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
        <CategorySearchSelector
          searchQuery={category}
          setSearchQuery={setCategory}
        />
      </div>
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TodoForm;
