import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';
import categories from '../components/Categories';

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
    if (title !== '') {
      e.preventDefault();
      const { addBook } = this.props;
      addBook(this.state);
      this.setState({
        id: '',
        title: '',
        category: 'Action',
      });
      e.target.reset();
    } else {
      e.preventDefault();
      alert('Please Type a valid Book Title'); // eslint-disable-line
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div className="my-3 w-100 px-5">
        <h4 className="text-secondary font-weight-bold h5">ADD NEW BOOK</h4>
        <form onSubmit={this.handleSubmit} className="d-flex justify-content-between">
          <input type="text" onChange={this.handleChange} value={title} name="title" placeholder="Book Title" className="w-50" />
          <select onChange={this.handleChange} name="category" className="w-25">
            {categories.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
          <button type="submit" className="bg-primary text-white border-0 px-5 py-1"><small>ADD BOOK</small></button>
        </form>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(addBook(book));
  },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
