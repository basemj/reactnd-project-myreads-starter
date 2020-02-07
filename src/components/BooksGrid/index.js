import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book';

function BooksGrid({books, onShelfChange}) {
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

BooksGrid.prototypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BooksGrid;
