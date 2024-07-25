const delayedMessage = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("This message is logged after 2 seconds");
  }, 2000);
});

// delayedMessage.then((message) => console.log(message));
// .catch(error => console.error(error));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("This is an error message."));
  }, 2000);
});

promise.catch((error) => {
  // console.error(error.message);
});

//create a seq of promises that stimulate fetching data from a server . Chain the promise to log messages in a specific order

const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //   console.log("Fetched data 1");
      resolve("Data 1");
    }, 1000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //   console.log("Fetched data 2");
      resolve("Data 2");
    }, 2000);
  });
};

const fetchData3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //   console.log("Fetched data 3");
      resolve("Data 3");
    }, 1500);
  });
};

fetchData1()
  .then((data1) => {
    // console.log("Processing", data1);
    // return fetchData2();
  })
  .then((data2) => {
    // console.log("Processing", data2);
    // return fetchData3();
  })
  .then((data3) => {
    // console.log("Processing", data3);
    // console.log("All data fetched and processed.");
  })
  .catch((error) => {
    // console.error("Error:", error.message);
  });

// write an async function thath waits for a promise to resolve and then log the resolved value.

const asyncFunc = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is the resolved value");
    }, 1000);
  })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => console.log(error));
};

// asyncFunc();

async function catchingErr() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("This is the rejected value"));
      }, 1000);
    });
  } catch (error) {
    console.log(error.message);
  }
}
// catchingErr();
