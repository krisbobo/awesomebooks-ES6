/* eslint-disable import/extensions */
import Book from './bookList.js';
import Store from './storage.js';

// ======== UI class: handle ui ========

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><a href="#" class="delete">Remove</td>
    `;
    list.appendChild(row);
  }

  static deleteBook(del) {
    if (del.classList.contains('delete')) {
      del.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// ============== event: display books ============

const eventControl = () => {
  document.addEventListener('DOMContentLoaded', UI.displayBooks);

  // ============== event: add a book =============

  document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // get the form value

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    if (!title || !author) return;
    const book = new Book(title, author);
    UI.addBookToList(book);

    Store.bookAdd(book);

    UI.clearFields();
  });
};

// ============event: remove a book ============

document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from UI
  const btns = Array.from(document.querySelector('.delete'));
  UI.deleteBook(e.target);

  // remove book from local store

  Store.bookRemoval(btns.indexOf(e.target));
});

export default eventControl;