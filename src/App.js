import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
