import React from 'react';
import PropTypes from 'prop-types';
import Categorize from './Categorize';

class DisplayEach extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.status}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <Categorize book={book} updateShelf={this.props.updateShelf} />
                    <div className="book-cover"
                      style={{ width: 128, height: '100%', backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

class DisplayAll extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
  }

  render() {
    const { books, updateShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <DisplayEach
              books={books.filter(b => b.shelf === "currentlyReading")}
              status={"Currently Reading"}
              updateShelf={updateShelf}
            />
            <DisplayEach
              books={books.filter(b => b.shelf === "wantToRead")}
              status={"Want To Read"}
              updateShelf={updateShelf}
            />
            <DisplayEach
              books={books.filter(b => b.shelf === "read")}
              status={"Read"}
              updateShelf={updateShelf}
            />
          </div>
        </div>
      </div>
    );
  }
};

export { DisplayAll, DisplayEach };
