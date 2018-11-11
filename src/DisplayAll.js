import React from 'react';
import PropTypes from 'prop-types';

// stateless functional compoment
function Categorize() {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want To Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      {/* <option onClick={() => updateStatus("Currently Reading")} value="currentlyReading">Currently Reading</option> */}
      {/* <option onClick={() => updateStatus("Want To Read")} value="wantToRead">Want to Read</option> */}
      {/* <option onClick={alert('hi')} value="read">Read</option> */}
    </select>
  </div>
  );
}

class DisplayEach extends React.Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book => (
            <li key={book.title}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                    style={{ width: 128, height: '100%', backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                  </div>
                  <Categorize updateStatus={this.props.updateStatus} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

class DisplayAll extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    // TODO: add other method here
  }
  state = {
    query: ''
  };

  render() {
    const { books } = this.props;
    const { query } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <DisplayEach
                books={books.filter(b => b.shelf === "currentlyReading")}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <DisplayEach
                books={books.filter(b => b.shelf === "wantToRead")}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <DisplayEach
                books={books.filter(b => b.shelf === "read")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { DisplayAll, DisplayEach };
