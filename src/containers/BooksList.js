import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import {removeBook} from '../actions/index';




class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook = (id) => {
    const {removeBook} = this.props;
     removeBook(id);
  }
  render() {
   const {books} = this.props; 
    
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove </th>
        </tr>

        {books.map(book => (
      <Book book={book} key={Math.random()} handleRemoveBook={this.handleRemoveBook} />
    ))}
      </table>
    );
    }

  
  
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
