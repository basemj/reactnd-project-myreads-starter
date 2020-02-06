import React from 'react';
import Book from '../Book';

function BooksGrid() {
  return <ol className="books-grid">
    <li>
      <Book />
    </li>
  </ol>
};

export default BooksGrid;
