import { useDispatch } from 'react-redux';

import { addTask } from '../../store/actions';

import styles from './TodoForm.module.css';

const TodoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const description = form.elements.description.value;
    dispatch(addTask({ name, description }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputTitle">Task</label>
        <input
          id="inputTitle"
          className={styles.field}
          type="text"
          name="name"
          placeholder="Name your task..."
        />
      </div>
      <div>
        <label htmlFor="inputDescription">Description</label>
        <input
          id="inputDescription"
          className={styles.field}
          type="text"
          name="description"
          placeholder="Enter some details..."
        />
      </div>
      <button type="submit">Add task</button>
    </form>
  );
};

export default TodoForm;