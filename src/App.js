import React from 'react';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import CreateBook from './CreateBook';
import DisplayAll from './DisplayAll';

// stateless functional compoment
function Categorize(updateStatus) {
  console.log(updateStatus);
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        <option onClick={() => updateStatus("Currently Reading")} value="currentlyReading">Currently Reading</option>
        <option onClick={() => updateStatus("Want To Read")} value="wantToRead">Want to Read</option>
        <option onClick={alert('hi')} value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

class Search extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/* NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
    );
  }
}

class DisplayEach extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.allbooks.map(book => (
          <li key={book.name}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: '100%', backgroundImage: `url(${book.cover})` }}></div>
              <Categorize updateStatus={this.props.updateStatus} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.author}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? ( <Search /> ) : ( <DisplayAll /> )}
      </div>
    );
  }
}

export default BooksApp;
