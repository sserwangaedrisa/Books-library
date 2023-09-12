const add = document.getElementById('addingButton');
const bookSection = document.getElementById('ul');
const Title = document.getElementById('Title');
const Author = document.getElementById('Author');
const BooksArray = [];
add.addEventListener('click', () => {
  class NewBook {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    updateBooksArray() {
      if (this.title.length !== 0) {
        BooksArray.push(this);
      }
    }
  }
  class Child extends NewBook {
    constructor(title, author) {
      super(title, author);
      this.title = title;
      this.author = author;
    }

    newBookItem() {
      if (this.title.length !== 0) {
        const newList = document.createElement('div');
        const newTitle = document.createElement('div');
        const newAuthor = document.createElement('div');
        const newdivButton = document.createElement('div');
        newdivButton.classList.add('removed');
        const newButton = document.createElement('button');
        newButton.classList.add('removeButton');
        newButton.textContent = 'Remove';
        newTitle.appendChild(
          document.createTextNode(`' ${this.title} ' by   `),
        );
        newAuthor.appendChild(document.createTextNode(`${this.author} `));
        newAuthor.style.padding = '7px';
        newdivButton.appendChild(newButton);
        newList.appendChild(newTitle);
        newList.appendChild(newAuthor);
        newList.appendChild(newdivButton);
        newList.classList.add('minorList');
        bookSection.appendChild(newList);
        Title.value = '';
        Author.value = '';
      }
    }
  }

  const book = new Child(Title.value, Author.value);
  book.newBookItem();
  book.updateBooksArray();
});

bookSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeButton')) {
    const listItem = event.target.closest('.minorList');
    listItem.parentNode.removeChild(listItem);
  }
});
