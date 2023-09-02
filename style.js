const remove = document.getElementsByClassName("removeButton");
const add = document.getElementById("addingButton");
const listItem = document.getElementsByClassName("list");
const bookSection = document.getElementById("ul");
var Title = document.getElementById("Title");
var Author = document.getElementById("Author");
const BooksArray = [];

add.addEventListener("click", function (event) {
  class NewBook {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
    updateBooksArray() {
      BooksArray.push(this);
    }
  }
  class Child extends NewBook {
    constructor(title, author) {
      super(title, author);
      this.title = title;
      this.author = author;
    }

    newBookItem() {
      if (Title.length !== 0) {
        const newList = document.createElement("div");
        const newTitle = document.createElement("div");
        const newAuthor = document.createElement("div");
        const newdivButton = document.createElement("div");
        newdivButton.classList.add("removed");
        const newButton = document.createElement("button");
        newButton.classList.add("removeButton");
        newButton.textContent = "Remove";
        newTitle.appendChild(
          document.createTextNode(`" ${this.title} " by   `)
        );
        newAuthor.appendChild(document.createTextNode(`${this.author} `));
        newAuthor.style.padding = "7px";
        newdivButton.appendChild(newButton);
        newList.appendChild(newTitle);
        newList.appendChild(newAuthor);
        newList.appendChild(newdivButton);
        newList.classList.add("minorList");
        bookSection.appendChild(newList);
        Title.value = "";
        Author.value = "";
      }
    }
  }

  var book = new Child(Title.value, Author.value);

  book.newBookItem();
  book.updateBooksArray();
  console.log(BooksArray);
});

bookSection.addEventListener("click", function (event) {
  if (event.target.classList.contains("removeButton")) {
    var listItem = event.target.closest(".minorList");
    listItem.parentNode.removeChild(listItem);
  }
});
