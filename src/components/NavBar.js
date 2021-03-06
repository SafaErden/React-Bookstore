import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';

const NavBar = ({ handleFilterChange }) => (
  <div className="d-flex justify-content-between border-bottom flex-row alig-items-center py-3 px-5 bg-white">
    <div className="d-flex align-items-center">
      <div className="text-primary font-weight-bold h3 mr-4">Bookstore CMS</div>
      <span className="text-secondary mr-4">BOOKS</span>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
    <div className="text-primary h2">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
      </svg>
    </div>
  </div>
);

NavBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default NavBar;
