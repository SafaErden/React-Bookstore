export const addBook = book => ({
    type: CREATE_BOOK,
    payload: book,
});

export const removeBook = id => ({
    type: REMOVE_BOOK,
    payload: id,
})