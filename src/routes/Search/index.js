import React from 'react';
import SearchBooksBar from '../../components/SearchBooksBar';
import BooksGrid from '../../components/BooksGrid';

function Search() {
  return <div className="search-books">
    <SearchBooksBar />
    <div className="search-books-results">
      <BooksGrid />
    </div>
  </div>
};

export default Search;
