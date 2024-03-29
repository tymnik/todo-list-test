import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CategorySearchSelector from 'components/CategorySearchSelector/CategorySearchSelector';
import Button from 'components/Button/Button';
import { addTask } from '../../store/actions';

import styles from './TodoForm.module.css';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('work');

  const handleSubmit = async event => {
    event.preventDefault();

    if (!name || !dueDate || !description) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      await dispatch(addTask({ name, description, dueDate, category }));
      toast.success('Task added successfully');
      setName('');
      setDescription('');
      setDueDate('');
      setCategory('work');
    } catch (error) {
      toast.error('Failed to add task');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formInputBlock}>
        <div className={styles.formElement}>
          <label htmlFor="inputTitle">Task</label>
          <input
            id="inputTitle"
            className={styles.field}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name your task..."
          />
        </div>
        <div className={styles.formElement}>
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
        <div className={styles.formElement}>
          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
          />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="category">Category</label>
          <CategorySearchSelector
            searchQuery={category}
            setSearchQuery={setCategory}
          />
        </div>
      </div>
      <div>
        <Button type="submit">Add task</Button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default TodoForm;
