import React from 'react';
import { search } from '../../BooksAPI';
import SearchBooksBar from '../../components/SearchBooksBar';
import BooksGrid from '../../components/BooksGrid';

class Search extends React.Component {
  state = {
    query: '',
    searching: false,
    results: []
  }

  lastCall = null;

  debounceUpdateQuery = (event) => {
    const query = event.target.value;
    this.setState({
      query,
      searching: true
    });

    let previousCall = this.lastCall;
    this.lastCall = Date.now();

    if (previousCall && ((this.lastCall - previousCall) <= 500)) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => this.updateQuery(query), 500);
  }
  
  updateQuery = (query) => {
    if (query === '') {
      this.setState({
        results: [],
        searching: false
      })
    } else {
      search(query).then(resp => {
        if (resp.error) {
          this.setState({
            results: [],
            searching: false
          });
        } else {
          const myBooks = this.props.books
          
          const results = resp.map(book => {
            const matchingBookInCollection = myBooks.find(myBook => myBook.id === book.id);
            book.shelf = matchingBookInCollection ? matchingBookInCollection.shelf : 'none';
            return book;
          })

          this.setState({
            results,
            searching: false
          });
        }
      })
    }
  }

  render() {
    const {
      query,
      searching,
      results
    } = this.state;

    return <div className="search-books">
      <SearchBooksBar query={query} onSearchChange={this.debounceUpdateQuery} />
      <div className="search-books-results">
        { searching ? <span>Searching...</span> : <BooksGrid books={results} onShelfChange={this.props.onShelfChange} /> }
      </div>
    </div>
  }
};

export default Search;
