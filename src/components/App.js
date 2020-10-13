import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="bg-primary">
      <BooksList key={12345} />
      <BooksForm />
    </div>
  );
}

export default App;
