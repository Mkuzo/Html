// Define the array of numbers
const numbers = [5, 12, 8, 130, 44];

// Task 1: map - Create a new array where each number is multiplied by 2
const doubledNumbers = numbers.map(num => num * 2);

// Task 2: filter - Create a new array with only numbers greater than 10
const numbersGreaterThanTen = numbers.filter(num => num > 10);

// Task 3: find - Return the first even number in the array
const firstEvenNumber = numbers.find(num => num % 2 === 0);

// Task 4: slice - Create a new array with elements from index 1 to index 3 (index 3 not included)
const slicedNumbers = numbers.slice(1, 3);

// Testing: Log each variable to the console
console.log("Original numbers array:");
console.log(numbers);
console.log("");

console.log("Task 1 - map: Doubled numbers (each number multiplied by 2):");
console.log(doubledNumbers);
console.log("");

console.log("Task 2 - filter: Numbers greater than 10:");
console.log(numbersGreaterThanTen);
console.log("");

console.log("Task 3 - find: First even number:");
console.log(firstEvenNumber);
console.log("");

console.log("Task 4 - slice: Elements from index 1 to index 3 (index 3 not included):");
console.log(slicedNumbers);
