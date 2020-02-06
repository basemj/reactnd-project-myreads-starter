import React from 'react';
import Book from '../Book';

function BooksGrid(props) {
  return <ol className="books-grid">
    {
      props.books.map(book => (
        <li>
          <Book book={book} />
        </li>
      ))
    }
  </ol>
};

export default BooksGrid;
