import booksApi from '../api/api';

export const addBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const categoryFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});

export const setBooks = async dispatch => {
  const response = await booksApi.get('/books');

  if (response.data.status === 'SUCCESS') dispatch({ type: 'SET_BOOKS', books: response.data.books });
};
