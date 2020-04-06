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

const hobbies = ["sports", "cooking", 1, true, {}];

// for (let hobby of hobbies) {
// 	console.log(hobby);
// }

console.log(
	hobbies.map(hobby => {
		return "Hobby:" + hobby;
	})
);

console.log(hobbies);

hobbies.push("Programming");

console.log(hobbies);

const copiedArray = [...hobbies];

console.log(copiedArray);

const copiedPerson = { ...person };

console.log(copiedArray);

const toArray = (arg1, arg2, arg3) => {
	return [arg1, arg2, arg3];
};

const tooArray = (...args) => {
	return args;
};

console.log(tooArray(1, 2, 3, 4));

const printName = personData => {
	console.log(personData.name);
};

printName(person);

const printsName = ({ name }) => {
	console.log(name);
};

printName(person);

const { name1, age2 } = person;
console.log(name1, age2);

const hobbies1 = ["Sports", "Cooking"];

const [hobby1, hobby2] = hobbies1;

console.log(hobby1, hobby2);

// const fetchData = callback => {
// 	setTimeout(() => {
// 		callback("Done");
// 	}, 1500);
// };

// setTimeout(() => {
// 	console.log("Timer is done!");
// 	fetchData(text => {
// 		console.log(text);
// 	});
// }, 2000);

console.log("Hello!");

console.log("Hi");

const fetchData = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Done");
		}, 1500);
	});
	return promise;
};

setTimeout(() => {
	console.log("Timer is done!");
	fetchData()
		.then(text => {
			console.log(text);
			return fetchData();
		})
		.then(text2 => {
			console.log(text2);
		});
}, 2000);
