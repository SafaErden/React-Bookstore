import React from 'react';

const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const Books = () => (
  <div className="bookform-section">
    <h4>ADD NEW BOOK</h4>
    <input type="text" />
    <select>
      {category.forEach(item => (
        <option>{item}</option>
      ))}
    </select>
    <button type="submit">Add a new book</button>
  </div>
);

export default Books;
