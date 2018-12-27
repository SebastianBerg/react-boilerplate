const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Chefen",
      age: 36
    });
    // reject("Something went wrong!");
  }, 2500);
});

console.log("before");

promise
  .then(data => {
    console.log("1", data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my other promise");
      }, 3500);
    });
  })
  .then(string => {
    console.log("does this run?", string);
  })
  .catch(error => {
    console.log("error:", error);
  });

console.log("after");
