import React from 'react';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

function App() {
  return (
    <div>
      <BooksList key={12345} />
      <BooksForm />
    </div>
  );
}

export default App;
