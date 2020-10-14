import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ id: Math.floor(Math.random() * 1000), [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { title } = this.state;
    e.preventDefault();
    if (title) {
      const { addBook } = this.props;
      addBook(this.state);
      this.setState({
        id: '',
        title: '',
        category: 'Action',
      });
      e.target.reset();
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div className="bookform-section">
        <form onSubmit={this.handleSubmit}>
          <h4>ADD NEW BOOK</h4>
          <input type="text" onChange={this.handleChange} value={title} name="title" placeHolder="Type Book Title" />
          <select onChange={this.handleChange} name="category">
            {categories.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
          <button type="submit">Add a new book</button>
        </form>
      </div>

    );
  }
}

const mapDispatchToProps = {
  addBook,
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
