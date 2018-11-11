import React from 'react';

// with help from @drunkenismet github repo
// https://github.com/drunkenismet

const Categorize = ({ book, shelf, move }) => {
  // const options = ["currentlyReading", "wantToRead", "read", "none"];
  const options = ["Currently Reading", "Want To Read", "Read", "None"];
  const theShelf = shelf !== "search-shelf" ? shelf : "none";

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={ theShelf }
        onChange={(event) => {
          const target = event.target.value;
          move(book, theShelf, target);
        }}>

        <option value="disabled" disabled>Move to...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
  </div>
  );
}

export default Categorize;

