import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../assets/spinner.JPG';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <div className="d-flex flex-row align-items-center justify-content-between border mx-5 my-3 p-2 bg-white">
      <div className="d-flex align-items-center justify-content-between w-100">
        <div>
          <div className="text-secondary"><small>{category}</small></div>
          <div className="h5 font-weight-bold m-0 p-0">{title}</div>
          <div className="text-primary m-0 p-0"><small>Safa ERDEN</small></div>
          <div className="mt-3">
            <span className="text-primary m-0  p-0 pr-2 btn border-right  rounded-0"><small>Comments</small></span>
            <span className="text-primary m-0  p-0 pr-2 pl-2 btn border-right rounded-0" onClick={e => { e.preventDefault(); handleRemoveBook(id); }}><small>Remove</small></span>
            <span className="text-primary m-0  p-0 pr-3 pl-2 btn border-right rounded-0"><small>Edit</small></span>
          </div>
        </div>
        <div className="border-right d-flex align-items-center pr-4">
          <div><img src={Spinner}/></div>
          <div>
            <div className="h3">64%</div>
            <div className="text-secondary"><small>Completed</small></div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column col-4">
        <div className="text-secondary"><small>CURRENT CHAPTER</small></div>
        <div className="h6">Chapter 17</div>
        <button className="bg-primary border-0 text-white rounded"><small>UPDATE PROGRESS</small></button>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
