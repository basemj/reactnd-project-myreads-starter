import React from 'react';
import BooksGrid from '../BooksGrid';

function Bookshelf(props) {
  const {
    books,
    title
  } = props;

return <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BooksGrid books={books} />
    </div>
  </div>
};

export default Bookshelf;
