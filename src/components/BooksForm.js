import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default class BooksForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    const {title, category} = this.state;
    return (
      <div className="bookform-section">
        <form>
          <h4>ADD NEW BOOK</h4>
          <input type="text" onChange={this.handleChange} value={title} name="title" placeHolder="Type Book Title"/>
          <select onChange={this.handleChange} name="category">
            {categories.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <button type="submit">Add a new book</button>
        </form>
      </div>

    );
  }
}