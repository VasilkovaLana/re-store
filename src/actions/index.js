const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED'
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCES',
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemoveFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVE_TO_CART',
    payload: bookId
  };
};

export const AllbooksRemoveFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVE_TO_CART',
    payload: bookId
  };
};

export { 
  fetchBooks
};