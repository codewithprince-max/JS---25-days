const PromiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls , cryptography , network
  setTimeout(function () {
    console.log(" async taks is completed");
    resolve();
  }, 1000);
});
PromiseOne.then(function () {
  console.log("task is consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(" async task 2 ");

    resolve();
  }, 1000);
}).then(function () {
  console.log(" Hello moto ");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "PRince", Password: " 123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally consumed");
  });
const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", Password: " 123" });
    } else {
      reject("js went wrong");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await PromiseFive;
  console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}

consumedPromiseFive( )