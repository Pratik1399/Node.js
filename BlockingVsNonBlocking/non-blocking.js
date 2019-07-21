//Input
const getUser = require("./src/getUser");

getUser(1, user => {
  console.log(user);
});

getUser(2, user => {
  console.log(user);
});

const sum = 1 + 33;
console.log(sum);

//Output Time

//Starting fetch first user(0 seconds)

//Starting fetch second user (0.2 seconds)

//Calculate print and sum (0.3 seconds)

//Printing first user (2 seconds)

//Printing second user (2.1 seconds)
