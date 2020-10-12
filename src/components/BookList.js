import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';


const Booklist  = ({books}) => {
    return(
        <table>
            <th>Header</th>
            { books.map(book =>
                <Book book={book} key={book.id}/>
            )}
        </table>
    );
}

const mapStateToProps = (state) => ({
      books: state.books
  });

export default connect(mapStateToProps)(Booklist);