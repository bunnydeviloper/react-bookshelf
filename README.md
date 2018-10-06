# MyReads Project - React Bookshelf

[**Project Rubic**](https://review.udacity.com/#!/rubrics/918/view)

* Starter template is forked from Udacity's FEND React Fundamentals course
  * Optional: start from scratch using [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project
* **Goal**:
  * Add interactivity to the app by refactoring the static code
  * Good React design practice is to create new JS files for each component
  * Use import/require statements to include them where they are needed
  * Functionality comes first, then UI, responsive design, offline usage, etc...
* Final result screenshots:
<img src="" />
<img src="" />

## Usage (run locally or add new features)
1. Clone (or fork) the repository: `[sudo] git clone https://github.com/bunnydeviloper/FEND-arcade-game.git`
2. To get started developing right away:
  * `cd` into the app's directory
  * Install all project dependencies with `npm install`
  * Start the development server with `npm start`
3. Your browswer should automatically navigate to `localhost:3000`
4. Back-end server is hosted automatically at `https://reactnd-books-api.udacity.com/` (more info below)

## Basic functionality
### Main Page
* Main page has 3 categories (or "bookshelves") for books (currently reading, want to read, and read)
* Each book is shown on the correct shelf, along with its title and author(s)
* User can move books between shelves (one book at a time) (bulk edit/move is optional feature)
* New information should persist when page refreshed (offline usage is optional feature)

### Search Page
* Search page has a search input that lets users search for books
  * As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s).
  * Search results are not shown when all of the text is deleted out of the search input box.
  * Invalid queries are handled and prior search results are not shown.
  * The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
  * The user is able to search for multiple words, such as “artificial intelligence.”
* Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
* If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
* When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

### Routing
* The main page contains a link to the search page.
  * When the link is clicked, the search page is displayed and the URL in the browser’s address bar is `/search`.
* The search page contains a link to the main page.
  * When the link is clicked, the main page is displayed and the URL in the browser’s address bar is `/`.

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query)`
* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m "Add a new awesome feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit and pull request.
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
