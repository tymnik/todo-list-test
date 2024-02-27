import React from 'react';

const CategorySearchSelector = ({ searchQuery, setSearchQuery }) => {
  return (
    <select value={searchQuery} onChange={e => setSearchQuery(e.target.value)}>
      <option value="work">Work</option>
      <option value="study">Study</option>
      <option value="personal">Personal</option>
    </select>
  );
};

export default CategorySearchSelector;
