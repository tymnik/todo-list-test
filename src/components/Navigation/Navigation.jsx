import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { statusFilters } from '../../store/constants';
import { getStatusFilter } from '../../store/selectors';
import { setStatusFilter } from '../../store/actions';
import { Button } from 'components/Button/Button';

import styles from './Navigation.module.css';

export const Navigation = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <nav className={styles.wrapper}>
      <NavLink to="/">
        <Button
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </Button>
      </NavLink>
      <NavLink to="/unfinished">
        <Button
          selected={filter === statusFilters.active}
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </Button>
      </NavLink>
      <NavLink to="/completed">
        <Button
          selected={filter === statusFilters.completed}
          onClick={() => handleFilterChange(statusFilters.completed)}
        >
          Completed
        </Button>
      </NavLink>
    </nav>
  );
};
