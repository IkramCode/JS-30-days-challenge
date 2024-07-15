let number = -9;

if (number > 0) {
  // console.log(`${number} is positive`);
} else if (number === 0) {
  // console.log(`${number} is zero`);
} else if (number < 0) console.log(`${number} is negative`);
else {
  // console.log("enter a number");
}

let age = 17;
if (age >= 18) {
  //   console.log(`You are eligible`);
} else {
  //   console.log(`You are not eligible`);
}

let num1 = 6;
let num2 = 9;
let num3 = 10;

if (num1 >= num2 && num1 >= num3) {
  // console.log(`${num1} is greatest`);
} else if (num2 >= num1 && num2 >= num3) {
  // console.log(`${num2} is greatest`);
} else if (num3 >= num1 && num3 >= num2) {
  // console.log(`${num3} is greatest`);
}

let day = 4;
switch (day) {
  case 1:
    // console.log("Monday");
    break;
  case 2:
    // console.log("Tuesday");
    break;
  case 3:
    // console.log("Wednesday");
    break;
  case 4:
    // console.log("Thursday");
    break;
  case 5:
    // console.log("Friday");
    break;
  case 6:
    // console.log("Saturday");
    break;
  case 7:
    // console.log("Sunday");
    break;
  default:
    // console.log("Please enter a number greater than 0 and smaller than 8");
    break;
}

let score = 101;
// console.log(score);

if (score > 100 || score < 0) {
  //   console.log(`Please enter a valid score between 0 and 100`);
} else {
  switch (true) {
    case score > 89:
      //   console.log(`Grade A`);
      break;
    case score > 81:
      //   console.log(`Grade B`);
      break;
    case score > 60:
      //   console.log(`Grade C`);
      break;
    case score > 33:
      //   console.log(`Grade D`);
      break;
    case score < 33 && score >= 0:
      //   console.log(`Grade F`);
      break;
    default:
      //   console.log(`Please enter a valid score between 0 and 100`);
      break;
  }
}

const nums = 14;
evenOdd = () => {
  nums % 2 == 0;
  // ? console.log(`${nums} is even`)
  // : console.log(`${nums} is odd`);
};
evenOdd(nums);

const leapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};
// console.log(leapYear(1996));
