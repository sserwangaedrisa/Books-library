const title = document.getElementById('Title');
const author = document.getElementById('Author');
const addButton = document.getElementById('AddButton');
const booksSection = document.getElementById('Books-section');
const addedBooks = [];

const addingBooksFunction = () => {
  if (title.value.length !== 0) {
    const addedBooks = JSON.parse(localStorage.getItem('Added books'));
    addedBooks.push({ Title: title.value, Author: author.value });
    localStorage.setItem('Added books', JSON.stringify(addedBooks));
  }
};

const cleaningEntries = () => {
  title.value = '';
  author.value = '';
};

const removingBookFunction = (id) => {
  const booksArray = JSON.parse(localStorage.getItem('Added books'));
  const updatedArray = booksArray.filter((book) => book.Title !== id);

  localStorage.setItem('Added books', JSON.stringify(updatedArray));
};

if (localStorage.getItem('Added books') === null) {
  localStorage.setItem('Added books', JSON.stringify(addedBooks));
} else {
  const addedBook = JSON.parse(localStorage.getItem('Added books'));
  addedBook.forEach((book, index) => {
    const newBookRow = document.createElement('div');
    newBookRow.classList.add('newRow');
    if (index % 2 === 0) {
      newBookRow.classList.add('evenBook');
    }
    const newBook = document.createElement('p');
    newBook.textContent = `"${book.Title}" by ${book.Author}`;
    newBook.classList.add('newBook');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('Remove');
    removeBtn.setAttribute('id', book.Title);

    removeBtn.addEventListener('click', (event) => {
      removingBookFunction(event.target.id);
      window.location.reload();
    });

    newBookRow.appendChild(newBook);
    newBookRow.appendChild(removeBtn);
    booksSection.appendChild(newBookRow);
  });
}

addButton.addEventListener('click', () => {
  if (title.value.length !== 0) {
    addingBooksFunction();
  }
  cleaningEntries();
  window.location.reload();
});
