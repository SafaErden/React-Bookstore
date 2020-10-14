import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/Categories';

const CategoryFilter = ({ handleFilterChange }) => (
  <select onChange={handleFilterChange}>
    <option value="ALL">ALL</option>
    {categories.map(category => <option value={category} key={category}>{category}</option>)}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
