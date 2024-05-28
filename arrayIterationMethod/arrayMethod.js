// import { name } from "../module/largestValue";

const number = [1, 2, 3, 4, 5, 6];

//iteration by foreach method
number.forEach((number) => {
  console.log("The number is: ", number);
});

const doubleNumber = number.map((number) => {
  return number * 2;
});
console.log("The double number is: ", doubleNumber);
//filtering the value
const evenNumbers = number.filter((element) => {
  return element % 2 == 0;
});
console.log("The even numbers are: ", evenNumbers);

//return the first satisfied value

const evenNumber = number.find((ele) => {
  return ele % 2 == 0;
});
console.log(evenNumber);

//will always return the boolean value

const hasEvenValue = number.some((ele) => {
  return ele % 2 == 0;
});
console.log(hasEvenValue);

//will return the boolean value for match the condition for evary element

const every = number.every((numbers) => {
  return numbers % 2 == 0;
});

console.log(every);

const person = [
  {
    id: 1,
    name: "Maisha",
    role: "SQA"
  },
  {
    id: 2,
    name: "Aysha",
    role: "SQA"
  },
  {
    id: 2,
    name: "Munni",
    role: "SQA"
  },
  {
    id: 4,
    name: "Nasif",
    role: "SQA"
  }
];

const obj = person.filter((personObj) => personObj.id === 2);
console.log("The person name is: ", obj);


