import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import NavBar from '../components/NavBar';
import { removeBook, categoryFilter, setBooks } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount () {
    const { setBooks } = this.props;
    setBooks();
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
      <div className="w-100 shadow-lg">
        <NavBar handleFilterChange={this.handleFilterChange} />
        {bookslist}
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

const mapDispatchToProps = {removeBook, categoryFilter, setBooks};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
