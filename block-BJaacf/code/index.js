// 1. Create an array named numbers and store 5 number values in it
var arr = [1, 2, 3, 4, 5];

// 2. Calculate the sum of array items and print it to the console using console.log()
let result = 0;
for (let sum of arr) {
  result += sum;
  //console.log(result);
}
console.log(result);

// 3. Calculate the average of array items and print it to the console using console.log()
console.log(result / arr.length);

// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = 3;
for (let num of arr) {
  if (num > highestNumber) {
    highestNumber = num;
  }
}
console.log(highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNumber = 5;
for (let num of arr) {
  num < lowestNumber ? (lowestNumber = num) : false;
}
console.log(lowestNumber);

// 6. Find the even numbers in the array and print them to the console using console.log()
let evenNum = [];
for (let num of arr) {
  if (num % 2 === 0) {
    evenNum.push(num);
  }
}
console.log(evenNum);

// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddNum = [];
for (let num of arr) {
  num % 2 !== 0 ? oddNum.push(num) : false;
}
console.log(oddNum);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let multipleOfFive = [];
for (let num of arr) {
  num % 5 === 0 ? multipleOfFive.push(num) : false;
}
console.log(multipleOfFive);

// 9. Log all the element of the array one by one
for (let num of arr) {
  console.log(num);
}

// 10. Find all the number in the array that is divisible by 3
let multipleOfThree = [];
for (let num of arr) {
  num % 3 === 0 ? multipleOfThree.push(num) : false;
}
console.log(multipleOfThree);
