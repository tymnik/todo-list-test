import React from 'react';

import styles from './CategorySearchSelector.module.css'

const CategorySearchSelector = ({ searchQuery, setSearchQuery }) => {
  return (
    <select
      className={styles.selector}
      aria-label="Select the category for task"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    >
      <option value="work">Work</option>
      <option value="study">Study</option>
      <option value="personal">Personal</option>
    </select>
  );
};

export default CategorySearchSelector;
