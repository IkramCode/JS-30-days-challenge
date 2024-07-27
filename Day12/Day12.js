function throwError() {
  try {
    throw new Error("An error occurred");
  } catch (error) {
    console.log("This error was thrown own purpose: ", error);
  }
}
// throwError();

function findingErr(num1, num2) {
  try {
    if (num2 % num1 === 0) {
      throw new Error("Denominator is zero");
    }
  } catch (error) {
    console.log("Denominator is zero");
  }
}
// findingErr(2, 4);

function usingFinally(num) {
  try {
    if (num % 2 == 0) {
      console.log(num + " is even");
    } else if (num % 2 == 1) {
      console.log(num + " is odd");
    } else {
      if (num === undefined) {
        throw new Error("Please provide a valid number");
      }
    }
  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    console.log("Finally block executed");
  }
}
// usingFinally(56);

class customError extends Error {
  constructor(message = "custom error") {
    super(message); // if this is not used refrence error is shown in console
    this.name = "CustomError"; // learnt this that it is the name property of a custom error
  }
}

function throwCustomError() {
  throw new customError("This is a custom error");
}
// throwCustomError();

function validateString(value) {
  if (value === "") {
    throw new customError("This is an empty string");
  }
}
// validateString("");

// Activity 4 is already done in the previous day

const invalidUrl = "https://invalid.url/endpoint";

fetch(invalidUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`
      );
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  });

const anotherInvalidUrl = "https://invalid.url/endpoint";

async function fetchingURl() {
  try {
    const data = await fetch(anotherInvalidUrl);
    const res = await data.json();
    return res;
  } catch (error) {
    console.error("There was an error fetching the URL" + error.message);
  }
}
fetchingURl(anotherInvalidUrl);
