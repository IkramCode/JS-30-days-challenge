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
console.log(book.changeYear());
