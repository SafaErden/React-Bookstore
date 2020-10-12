import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';


const BooksList = ({ books }) => {
    const bookList = books.map(book => (
      <Book book={book} key={Math.random()} />
    ));
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {bookList}
      </table>
    );
  };
  

const mapStateToProps = (state) => ({
      books: state.books
  });

export default connect(mapStateToProps)(BooksList);