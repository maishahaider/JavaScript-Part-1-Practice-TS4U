function doSomething(callback) {
  console.log("Do something");
  //call or invoke the callback function
  callback();
}

function doSomethingElse() {
  console.log("Do something else");
}

doSomething(doSomethingElse);
