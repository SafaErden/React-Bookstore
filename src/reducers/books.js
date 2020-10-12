const books = (state=[], action) => {
    switch (action.type) {
        case CREATE_BOOK:
            return [...state]
        case  REMOVE_BOOK:
            return state.filter(book => action.id !== book.id)
        default:
            return state;
    }
}

export default books;