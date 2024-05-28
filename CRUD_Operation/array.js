const instructor = [
  {
    id: 1,
    name: "Maisha",
    role: "SQAE",
  },
  {
    id: 2,
    name: "Ashik",
    role: "SQAE",
  },
];

const newInstructor = {
  id: 3,
  name: "Munni",
  role: "SQAE",
};
instructor.push(newInstructor);
// console.log("After creating a new element", instructor);

//Update Maisha object
// const idToBeUpdated = 1;
// const index = instructor.findIndex((item) => item.id === idToBeUpdated);
// console.log(index);

// const updateValue = {
//   name: "Maisha Binta Haider",
//   role: "Software Quality Assurance Engineer",
// };
// instructor[index] = {
//   ...instructor[index],
//   ...updateValue,
// };

// console.log("The updates object is", instructor);

//delete object
// console.log("Before deleting the element", instructor);

// const idToBeDeleted = 3;
// const indexOfElement = instructor.findIndex((item) => item.id === idToBeDeleted);
// instructor.splice(indexOfElement, 1);

// console.log("After deleting the element", instructor);

//Getting all the objects from array

// const allInstructors = instructor.map((instructor) =>
//   console.log(instructor)
// );

const allInstructors = instructor.map((instructor,index) =>
    console.log(`Object ${index} `, instructor)
  );
  