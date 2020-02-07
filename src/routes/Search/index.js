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
          this.setState({
            results: resp,
            searching: false
          });
        }
      })
    }
  }

  render() {
    return <div className="search-books">
      <SearchBooksBar query={this.state.query} onSearchChange={this.debounceUpdateQuery} />
      <div className="search-books-results">
        { this.state.searching ? <span>Searching...</span> : <BooksGrid books={this.state.results} /> }
      </div>
    </div>
  }
};

export default Search;
