import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook,categoryFilter } from '../actions/index';
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
  handleFilterChange = (e) => {
    const { categoryFilter } = this.props;
    categoryFilter(e.target.value);
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        <CategoryFilter handleFilterChange={this.handleFilterChange}/>
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
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter
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
