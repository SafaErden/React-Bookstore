import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import {removeBook} from '../actions/index';




const BooksList = ({ books, removeBook }) => {
  const bookList = books.map(book => (
    <Book book={book} key={Math.random()} removeBook={removeBook} />
  ));
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Category</th>
      </tr>
      {bookList}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
