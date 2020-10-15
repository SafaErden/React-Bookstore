
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'SET_BOOKS':
      return action.books;
    case 'REMOVE_BOOK':
      return state.filter(book => action.id !== book.id);
    default:
      return state;
  }
};

export default booksReducer;
