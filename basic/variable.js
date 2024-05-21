//initializing variable with var keyword
var num = 20;
console.log(num);
let num1 = 24;
console.log(num1);
// num1 = 30;
// console.log(num1);

const num2 = 4;
console.log(num2);
// num2 = 5;
// console.log(num2);

function accessVariable() {
  let num3 = 10;
  const num4 = 90;
  var num5 = 80;

  console.log("accessing from the function scope", num3);
  console.log("accessing from the function scope", num4);
  console.log("accessing from the function scope", num5);
  console.log("Accessing from the function scope", num1);
  console.log("Accessing fron the function scope", num);
  console.log("Accessing fron the function scope", num2);
  return num5;
}
accessVariable();

console.log(
  "accessing outside of the  function scope num5",
  accessVariable.num5
);
console.log("accessing outside of the  function scope", num4);
console.log("accessing outside of the function scope", num3);
