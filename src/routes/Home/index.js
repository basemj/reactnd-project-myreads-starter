import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Bookshelf from '../../components/Bookeshelf';

function Home({onShelfChange, organisedBooks}) {
  const {
    currentlyReading,
    wantToRead,
    read
  } = organisedBooks;

  return <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf title="Currently Reading" books={currentlyReading} onShelfChange={onShelfChange} />
        <Bookshelf title="Want to Read" books={wantToRead} onShelfChange={onShelfChange} />
        <Bookshelf title="Read" books={read} onShelfChange={onShelfChange} />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">
        <button>Add a book</button>
      </Link>
      
    </div>
  </div>
};

Home.prototypes = {
  onShelfChange: PropTypes.func.isRequired,
  organisedBooks: PropTypes.array.isRequired
}

export default Home;
