import React from 'react';
import { getAll } from './BooksAPI'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';

class BooksApp extends React.Component {
  state = {
    books: [],
    organisedBooks: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  componentDidMount() {
    getAll().then(books => {
      this.updateBooksList(books);
    });
  }

  updateBooksList(books) {
    const organisedBooks = books.reduce((current, book) => {
      current[book.shelf].push(book);
      return current;
    }, this.state.organisedBooks)
  
    this.setState({books, organisedBooks});
  }
  
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={() => <Home organisedBooks={this.state.organisedBooks} />} />
          <Route exact path="/search" component={() => <Search books={this.state.books} />} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
