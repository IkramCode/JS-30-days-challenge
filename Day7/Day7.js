const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  fetchDetails: function () {
    return `Title: ${this.title} , Author : ${this.author}`;
  },
  changeYear: function (newYear) {
    this.year = newYear;
  },
};

book.changeYear(2016);

// console.log(book.author);
// console.log(book.title);
// console.log(book.fetchDetails());
// console.log(book.changeYear());

const library = {
  name: "Qauid-e-Azam Library",
  books: [
    {
      title: "Sahih bukhari",
      author: "Imam Bukhari",
      year: 876,
      fetchDetails: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "Sahih Muslim",
      author: "Imam Muslim",
      year: 856,
      fetchDetails: function () {
        return `${this.title} (${this.year})`;
      },
    },
  ],
};

// console.log(library);

// console.log(library.name);
// library.books.map((book) => console.log(book.title));
// library.books.map((book) => console.log(book.fetchDetails()));

library.books.map((books) =>
  console.log(`${Object.keys(books)} : ${Object.values(books)}`)
);
