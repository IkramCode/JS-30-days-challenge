const num = [1, 2, 3, 4, 5, 6];
// console.log(num);

const firstChar = num[0];
const lastChar = num[num.length - 1];
// console.log(firstChar)
// console.log(lastChar);

const push = num.push(7);
// console.log(num);

const pop = num.pop();
// console.log(num);

const shift = num.shift();
// console.log(num);

const unShift = num.unshift(1);
// console.log(num);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const mapped = arr.map((indexes) => indexes * 2);
// console.log(mapped);

const filtered = arr.filter((index) => index % 2 == 0);
// console.log(filtered);

const reduce = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
// console.log((reduce));

const array = ["JS", "Python", "Rust", "Go"];

for (let i = 0; i < array.length; i++) {
  // console.log(array[i]);
}

array.forEach((element) => {
  const lang = element + " language";
  // console.log(lang);
});

const twoDarr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
console.log(twoDarr);
console.log(twoDarr[0][0]);
