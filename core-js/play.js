//binvar name = "Pratik";

const name = "Pratik";

//var age = 27;

let age = 27;

//var hasHobbies = true;

const hasHobbies = true;

age = 29;

// function summarizeUser(useName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     useName +
//     ",age is " +
//     userAge +
//     " and the user has hobbies:" +
//     userHasHobby
//   );
// }

const summarizeUser = (useName, userAge, userHasHobby) => {
  return (
    "Name is " +
    useName +
    ",age is " +
    userAge +
    " and the user has hobbies:" +
    userHasHobby
  );
};

//const add = (a,b) => a + b;

//console.log(add(1,2));

//const addOne = a => a + 1;

//console.log(addOne(1));

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));

const person = {
  name: "Pratik",
  age: 29,
  greet() {
    console.log("Hi,I am " + this.name);
  }
};

person.greet();
