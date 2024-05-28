class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age}`);
  }
}

const Maisha = new Person("Maisha Binta Haider", 35);
Maisha.sayHello();

class AnotherStudent extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  learning() {
    console.log(`${this.name} is learning JavaScript module.`);
  }
}
const Ashik = new AnotherStudent("Ashik", 21, "Private Coach");
Ashik.learning();
