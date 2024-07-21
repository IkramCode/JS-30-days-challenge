// let name = "ikram";
// let age = 19;

// console.log(`My name is ${name} and my age is ${age}`);

// console.log(`My name is ${name}
// My age is ${age}`);

const arr = [56, 57, 18, 45];
const [first, second, third, ...rest] = arr;

// console.log(`First element is ${first}`);
// console.log(`Second element is ${second}`);
// console.log(`Third element is ${third}`);
// console.log(rest);

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

const { title, author } = book;

// console.log(`Author of '${title}' is '${author}' `);

const array = ["Superman", "Spiderman", "Batman"];
let others = ["Captin America", "Hulk"];

let newArr = [array, ...others];
// console.log(newArr);

function addNum(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// console.log(addNum(2, 3, 7));

function defaultParams(a, b = 1) {
  return a + b;
}
// console.log(defaultParams( 2 , 5));
// console.log(defaultParams( 2 ));

// Enhanced object literals are still remaining
