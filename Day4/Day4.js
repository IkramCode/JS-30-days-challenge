for (let index = 0; index < 11; index++) {
  //   console.log(index);
}

let tableof = 5;

for (let i = 0; i < 11; i++) {
  const answer = tableof * i;
  // console.log(`${tableof} x ${i} = ${answer}` );
}

let i = 0;
let sum = 0;

while (i <= 10) {
  sum += i;
  i++;
}
// console.log(sum);

let num = 10;
while (num > 0) {
  //   console.log(num);
  num--;
}

let number = 1;

do {
  //   console.log(number);
  number++;
} while (number <= 5);

let factorialNum = 5;
let factorial = 1;

do {
  factorial *= factorialNum;
  //   console.log(factorialNum);
  factorialNum--;
} while (factorialNum > 0);

// console.log(factorial);

let lines = 4;

for (let i = 1; i <= lines; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  //   console.log(pattern);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) continue;
//   console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
