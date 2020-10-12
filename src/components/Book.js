import React from 'react';

const Book = (book) => {
    const {BookID, title, category} = book;
    return(
        <tr key={BookID}>
            <td>{BookID} </td>
            <td>{title} </td>
            <td>{category} </td>
        </tr>
    )
}

export default Book;