import React from 'react';

import { Navigation } from 'components/Navigation/Navigation';

import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Taskopia: Where Productivity Meets Simplicity!
      </h1>
      <Navigation />
    </section>
  );
};

export default AppBar;
