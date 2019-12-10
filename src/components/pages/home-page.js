import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () =>{
  const books = [
    { id: 1,
      title: 'You Don\'t Know JS',
      author: 'Kyle Simpson' },
    { id: 2,
      title: 'Ten Arguments for Deleting Your Social Media Accounts Right Now',
      author: 'Jaron Lanier' }
  ]
  return (
    <BookList books={books} />
  );
};

export default HomePage;