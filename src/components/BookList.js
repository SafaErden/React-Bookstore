import React from 'react';
import { connect } from 'react-redux';


const Booklist  = (props) => {
    return(
        <table>
            <th>Header</th>
            { books.map(book =>
                <Book book={book} />
            )}
        </table>
    );
}

const mapStateToProps = (state) => ({
      books: state.books
  });

export default connect(mapStateToProps)(Booklist);