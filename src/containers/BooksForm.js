import React from 'react';
import {connect} from "react-redux";
import {addBook} from '../actions/index';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: 'Action'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({id: Math.floor(Math.random() * 1000),[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    if(this.state.title !== ''){
      e.preventDefault();
      const {addBook} = this.props;
      addBook(this.state);
      this.setState({
        id: '',
        title: '',
        category: 'Action'
      });
      e.target.reset();
    } else {
      e.preventDefault();
      alert('Please Type a valid Book Title');
    }
  }
  render() {
    const {title} = this.state;
    return (
      <div className="bookform-section">
        <form  onSubmit={this.handleSubmit}>
          <h4>ADD NEW BOOK</h4>
          <input type="text" onChange={this.handleChange} value={title} name="title" placeHolder="Type Book Title"/>
          <select onChange={this.handleChange} name="category">
            {categories.map((item,index) => (
              <option value={item} key={index}>{item}</option>
            ))}
          </select>
          <button type="submit">Add a new book</button>
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