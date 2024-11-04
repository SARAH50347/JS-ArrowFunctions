// 1 Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
// const greet=(name) =>console.log(`Hello, ${name}!`);


const greet = (name) => {return `Hello, ${name}!`;};

console.log(greet("sarah"));

//const helloName = (name) => {console.log(`Hello, ${name}!`);}


//console.log(helloName,sarah);


// 2 Write a simple arrow function that takes two parameters and returns their sum.


const sum = ( firstNum, secondNum) => {return firstNum+secondNum;};
console.log(sum(4,5));

// 3 Write a simple arrow function that squares a number.
const squared = number => {return number*number;};
console.log(squared(9));


// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numbers = [1, 2, 3, 4];

const squareArray =(numbers) => numbers.map(numbers =>{return numbers **2;});

console.log(squareArray(numbers));