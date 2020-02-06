import React from 'react';
import Bookshelf from '../../components/Bookeshelf';
import { Link } from 'react-router-dom';

function Home() {
  return <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf title="Currently Reading" />
        <Bookshelf title="Want to Read" />
        <Bookshelf title="Read" />
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
