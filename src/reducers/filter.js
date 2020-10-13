const filterReducer = (state=[], action) => {
    switch (action.type) {
        case 'CHANGE_FILTER':
            return state.filter(book => action.category === book.category);
        default:
            return state;
    }
}

export default filterReducer;