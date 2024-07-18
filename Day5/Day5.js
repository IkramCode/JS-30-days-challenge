function evenorOdd(a) {
  if (a % 2 == 0) {
    console.log(`${a} is even`);
  } else {
    console.log(`${a} is odd`);
  }
}
// evenorOdd(0);

function square(b) {
  const sqq = b * b;
  console.log(`square of ${b} is ${sqq}`);
}
// square(10)

function maxNum(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else {
    console.log(`${b} is greater than ${a}`);
  }
}
// maxNum(3 , 6)

function concatStr(str1, str2) {
  return str1.concat(str2);
}
const result = concatStr("Ikram", " Ul Haq");
// console.log(result);

const sum = (a, b) => {
  console.log(a + b);
};
// sum(6 , 7)

const findChar = (str) => str.includes("/");

// console.log(findChar("ikramulhaq/portfolio"));

const product = (a, b) => {
  if (b == undefined) {
    b = 56;
  }
  console.log(a * b);
};

// product(4)

const productES6 = (a, b = 3) => {
  console.log(a * b);
};
// productES6(5)

const greetingMsg = (name, age = 20) => {
  return `Hello ${name} you are ${age} years old`;
};
const name = "Ali";
const age = 24;
const greetings = greetingMsg(name, age);
// console.log(greetings);

function nTimesFunc(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

const greeting = () => {
  // console.log("Hello");
};
nTimesFunc(greeting, 3);

function hof(func1, func2, val) {
  const interRes = func1(val);
  const finalRes = func2(interRes);
  return finalRes;
}

const addNum = (a) => {
  return a * 4;
};

const subNum = (b) => {
  return b - 1;
};

const res = hof(addNum, subNum, 4);
// console.log(res);
