import React from 'react';
import { getAll } from './BooksAPI'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({isLoading: false, books});
    });
  }
  
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={() => <Home books={this.state.books} />} />
          <Route exact path="/search" component={Search} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
