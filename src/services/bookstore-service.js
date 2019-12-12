export default class BookstoreService {
  getBooks() {
    return [
      {
         id: 1,
        title: 'Ten Arguments for Deleting Your Social Media Accounts Right Now',
        author: 'Jaron Lanier',
        price: '13.00',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41KVyUJTmjL.jpg' },
      { 
        id: 2,
        title: 'You Don\'t Know JS: ES6 & Beyond',
        author: 'Kyle Simpson',
        price: '10.99',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/410%2BtmN-P%2BL._SX331_BO1,204,203,200_.jpg' }
    ];
  }
}