//function declaration
function addNumber(num1, num2) {
  const result = num1 + num2;
  return result;
}

//function call or invoke

console.log("The summation is:", addNumber(20, 30));

//function expression
let substraction = function (num1, num2) {
  return num1 - num2;
};

console.log("The substraction is: ", substraction(50, 30));

//arrow function or fat arrow function

const multiplication = (num1, num2) => num1 * num2;
console.log("The multiplication is: ", multiplication(2, 3));

//fat arrow function with one parameter

const multiplicationWithOneParameter = (num) => num * num;
console.log(
  "The result multiplication with one parameter is : ",
  multiplicationWithOneParameter(3)
);
