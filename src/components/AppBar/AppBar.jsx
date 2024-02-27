import React from 'react';

import { Navigation } from 'components/Navigation/Navigation';

import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.wrapper}>
      <section className={styles.section}>
        <h1 className={styles.title}>Choose your tasks</h1>
        <Navigation />
      </section>
    </header>
  );
};

export default AppBar;
