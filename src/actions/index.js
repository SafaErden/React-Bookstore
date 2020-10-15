import booksApi from '../api/api';

export const setBooks = () => async dispatch => {
  const response = await booksApi.get('/books');
  dispatch({ type: 'SET_BOOKS', books: response.data });
};

export const addBook = book => async dispatch => {
  const response = await booksApi.post('/books', book);
  dispatch({type:'CREATE_BOOK', book: response.data});
};

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const categoryFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});
