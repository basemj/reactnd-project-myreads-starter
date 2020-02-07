import React from 'react';
import Bookshelf from '../../components/Bookeshelf';
import { Link } from 'react-router-dom';

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

export default Home;
