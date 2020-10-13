import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center flex-column p-5">
      <BooksList key={12345} />
      <BooksForm />
    </div>
  );
}

export default App;
