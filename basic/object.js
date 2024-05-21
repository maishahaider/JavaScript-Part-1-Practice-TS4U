//creating an object
let myObject = {
  name: "Maisha",
  Age: 30,
  Experience: 1,
  greet: function () {
    console.log("Hello everyone.");
  },
  information: function(){
    return this.name + " has " + this.Experience + " years of experience"
  }
};

//accessing with dot notation
console.log(myObject.name);

//accessing with bracet notation
console.log(myObject["Age"]);
myObject.greet();
console.log(myObject.information());