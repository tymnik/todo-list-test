import { StatusFilter } from 'components/StatusFilter/StatusFilter';

import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.wrapper}>
      <section className={styles.section}>
        <h2 className={styles.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};

export default AppBar;