import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import AddBook from './CreateBook';
import { DisplayAll, DisplayEach } from './DisplayAll';
import { Link, Route } from 'react-router-dom';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((books) => {
        // this.setState({ books })
        this.setState(state => ({
          books: state.books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <DisplayAll
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>
          </div>
        )}/>
      <Route path="/search" component={Search} />
    </div>
    );
  }
}

export default BooksApp;
