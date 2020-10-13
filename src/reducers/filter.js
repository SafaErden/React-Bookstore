const filterReducer = (state='ALL', action) => {
    if (action.category) {
        const updated = action.category
        return updated;
    }
    return state;
}

export default filterReducer;