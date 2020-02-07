import React from 'react';
import Book from '../Book';

function BooksGrid(props) {
  const {
    books,
    onShelfChange
  } = props;

  return <ol className="books-grid">
    {
      books && books.map(book => (
        <li key={book.id}>
          <Book book={book} onShelfChange={onShelfChange} />
        </li>
      ))
    }
  </ol>
};

export default BooksGrid;
