export default class Navigation {
  constructor() {
    this.year = document.querySelector('.year');
    this.container = document.querySelector('.layout');
    this.bookList = document.querySelector('.book');
    this.contact = document.querySelector('.contact');
    this.first = document.querySelector('.list');
    this.second = document.querySelector('.add');
    this.third = document.querySelector('.contact-me');
    this.title = document.querySelector('.book-header');
  }

  view() {
    this.first.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.style.display = 'block';
      this.bookList.style.display = 'none';
      this.contact.style.display = 'none';
      this.title.style.display = 'block';
    });
    this.second.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.style.display = 'none';
      this.bookList.style.display = 'flex';
      this.contact.style.display = 'none';
      this.title.style.display = 'none';
    });
    this.third.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.style.display = 'none';
      this.bookList.style.display = 'none';
      this.contact.style.display = 'block';
      this.title.style.display = 'none';
    });
  }
}