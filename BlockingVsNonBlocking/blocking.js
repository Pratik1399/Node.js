//Input
const getUserSync = require("./src/getUserSync");

const userOne = getUserSync(1);
console.log(userOne);

const userTwo = getUserSync(2);
console.log(userTwo);

const sum = 1 + 33;
console.log(sum);

//Output Time
//Fetching first user (2 seconds)

//Printing first user (2 seconds)

//Fetching second user (4 seconds)

//Printing second user (4 seconds)

//Calculate and print sum (4.2 seconds)
