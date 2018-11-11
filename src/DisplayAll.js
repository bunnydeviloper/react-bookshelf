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

class DisplayAll extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    // TODO: add other method here
  }
  state = {
    allbooks: [
      { title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        status: "Currently Reading"
      },
      { title: "Ender's Game",
        author: "Orson Scott Card",
        cover: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        status: "Currently Reading"
      },
      { title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        cover: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        status: "Want To Read"
      },
      { title: "1776",
        author: "David McCullough",
        cover: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        status: "Want To Read"
      },
      { title: "The Hobbit",
        author: "J.R.R. Tolkien",
        cover: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        status: "Read"
      },
      { title: "Oh, the Places You'll Go!",
        author: "Seuss",
        cover: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
        status: "Read"
      },
      { title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        cover: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
        status: "Read"
      },
    ]
  };

  updateStatus = (status) => {
    this.setState((prevState) => {
    });
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <DisplayEach
                  allbooks={this.state.allbooks.filter(b => b.status === "Currently Reading")}
                  updateStatus={this.updateStatus}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <DisplayEach
                  allbooks={this.state.allbooks.filter(b => b.status === "Want To Read")}
                  updateStatus={this.updateStatus}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <DisplayEach
                  allbooks={this.state.allbooks.filter(b => b.status === "Read")}
                  updateStatus={this.updateStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { DisplayAll, DisplayEach };
