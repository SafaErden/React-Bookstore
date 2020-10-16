import booksApi from '../api/api';
const config = {
  headers: {
    Authorization: 'Token ' + "status"
  }
 }
export const setBooks = () => async dispatch => {
  const response = await booksApi.get('/books', config);
  dispatch({ type: 'SET_BOOKS', books: response.data });
};

export const addBook = book => async dispatch => {
  const response = await booksApi.post('/books', book, config);
  dispatch({type:'CREATE_BOOK', book: response.data});
};

export const removeBook = id => async dispatch => {
  const response = await booksApi.delete(`/books/${id}` , config);
  dispatch({type:'REMOVE_BOOK', id});
  
};

export const categoryFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});
