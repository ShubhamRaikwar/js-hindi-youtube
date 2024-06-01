// array

const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Shaktiman", "Naagraj"];

const myArray2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray[5]);

// Array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9);
// myArray.shift();

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();

// console.log("myArray:", myArray);
// console.log("newArray:", newArray);

// console.log(typeof newArray);
// console.log(typeof myArray);

// Slice, Splice

console.log("A:", myArray);

const mynewA1 = myArray.slice(1, 3)

console.log(mynewA1);
console.log("B:", myArray);

const mynewA2 = myArray.splice(1, 3)
console.log(mynewA2);
console.log("C:", myArray);


