const person = {
  name: "Maisha",
  role: "Software Quality Assurance Engineer",
  age: 27,
};

//destructing the value from personal variable

const { name, role } = person;

console.log(name);
console.log(role);

const framework = ["Selenium", "Cucumber", "Cypress", "TestNG"];
const [firstFramework, secondFramework] = framework;
console.log(firstFramework);
console.log(secondFramework);
