export default class BookstoreService {
  getBooks() {
    return [
      { id: 1,
        title: 'You Don\'t Know JS',
        author: 'Kyle Simpson' },
      { id: 2,
        title: 'Ten Arguments for Deleting Your Social Media Accounts Right Now',
        author: 'Jaron Lanier' }
    ];
  }
}