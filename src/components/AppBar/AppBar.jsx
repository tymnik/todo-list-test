import React from 'react';

import { Navigation } from 'components/Navigation/Navigation';

import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.wrapper}>
      <section className={styles.section}>
        <h2 className={styles.title}>Filter by status</h2>
        <Navigation />
      </section>
    </header>
  );
};

export default AppBar;
