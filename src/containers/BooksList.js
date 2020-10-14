import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, categoryFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook = id => {
    const { removeBook } = this.props;
    removeBook(id);
  }

  handleFilterChange = e => {
    const { categoryFilter } = this.props;
    categoryFilter(e.target.value);
  }

  render() {
    const { books, filter } = this.props;
    let bookslist;
    if (filter === 'ALL') {
      bookslist = books.map(book => (
        <Book book={book} key={Math.random()} handleRemoveBook={this.handleRemoveBook} />
      ));
    } else {
      bookslist = books
        .filter(book => book.category === filter)
        .map(book => (
          <Book removeBook={this.removeBook} book={book} key={Math.random()} />
        ));
    }
    return (
      <div>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
        <table>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove </th>
          </tr>
          {bookslist}
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  categoryFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
  categoryFilter: category => {
    dispatch(categoryFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
