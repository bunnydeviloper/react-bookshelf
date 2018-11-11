import React, { Component } from 'react';

// with help from @drunkenismet github repo
// https://github.com/drunkenismet

class Categorize extends Component {

  render() {
    const { book, updateShelf } = this.props;
    const options = [
      {"currentlyReading": "Currently Reading"},
      {"wantToRead": "Want To Read"},
      {"read": "Read"},
      {"none": "None"}
    ];

    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={book.shelf}
          onChange={(event) => {
            updateShelf(book, event.target.value);
          }}>

          <option value="disabled" disabled>Move to...</option>
        {options.map((option) => (
          <option key={Object.keys(option)[0]} value={Object.keys(option)[0]}>
            {Object.values(option)[0]}
          </option>
        ))}
      </select>
    </div>
    );
  }
}

export default Categorize;

