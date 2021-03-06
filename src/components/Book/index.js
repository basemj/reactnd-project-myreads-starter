import React from 'react';
import PropTypes from 'prop-types';

function Book({book, onShelfChange}) {
  const {
    imageLinks,
    title,
    authors,
    shelf
  } = book;

  return <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks && imageLinks.smallThumbnail}")` }}></div>
      <div className="book-shelf-changer">
        <select value={shelf} onChange={onShelfChange.bind(null, book)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors && authors.join(', ')}</div>
  </div>
};

Book.prototypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book;
