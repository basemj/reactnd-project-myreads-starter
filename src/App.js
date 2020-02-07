import React from 'react';
import { getAll, update } from './BooksAPI'
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
    }, {
      currentlyReading: [],
      wantToRead: [],
      read: []
    })
  
    this.setState({books, organisedBooks});
  }

  changeShelf = (book, event) => {
    const shelf = event.target.value;
    const filteredBooks = this.state.books.filter(currentBook => currentBook.id !== book.id);
    book.shelf = shelf;

    const updatedBooks = [
      ...filteredBooks,
      book
    ]

    this.setState({books: updatedBooks});

    update(book, shelf).then(() => {
      this.updateBooksList(updatedBooks);
    });
  }
  
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" render={() => <Home organisedBooks={this.state.organisedBooks} onShelfChange={this.changeShelf} />} />
          <Route exact path="/search" render={() => <Search books={this.state.books} onShelfChange={this.changeShelf} />} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
