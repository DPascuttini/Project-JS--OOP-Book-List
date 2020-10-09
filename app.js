//Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI Constructor
function UI() {}
UI.prototype.addBookTOList = function (book) {};
//Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();
  ui.addBookTOList(book);

  e.preventDefault();
});
