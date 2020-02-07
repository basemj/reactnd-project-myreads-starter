import React from 'react';
import PropTypes from 'prop-types';

import BooksGrid from '../BooksGrid';

function Bookshelf({books, title, onShelfChange}) {
  return <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BooksGrid books={books} onShelfChange={onShelfChange} />
    </div>
  </div>
};

Bookshelf.prototypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string,
  onShelfChange: PropTypes.func.isRequired
}

export default Bookshelf;
