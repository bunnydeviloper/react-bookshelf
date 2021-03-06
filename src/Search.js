import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { DisplayEach } from './DisplayAll';
import AddBook from './CreateBook';

class Search extends Component {
  state = {
    query: ''
  };

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  /*
  clearQuery = () => {
    this.setState({ query: '' })
  }
  */

  render() {
    const { books } = this.props;
    const { query } = this.state;

    let showingBooks;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingBooks = books.filter((book) => {
        return match.test(book.title) || match.test(book.authors);
      });
    } else {
      showingBooks = [];
    }

    showingBooks.sort(sortBy('title'));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Home</Link>
          <div className="search-books-input-wrapper">
            {/* NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                  value={query} onChange={(event) => this.updateQuery(event.target.value)}
                />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>

          {showingBooks.length > 0 && (
            <DisplayEach books={showingBooks} />
          )}
          <AddBook />
        </div>
    );
  }
}

export default Search;
