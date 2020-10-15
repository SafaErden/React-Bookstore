const books = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Safa and his projects',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Taiwo and her projects',
    category: 'Sci-Fi',
  },
];
const booksReducer = (state = books, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter(book => action.id !== book.id);
    default:
      return state;
  }
};

export default booksReducer;
