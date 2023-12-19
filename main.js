// How many people? 8
// how many pizzas do you have? 4

// let people = prompt("how many people?");
// let pizza = prompt("how many pizza do you have?");
// let result = pizza / people

// console.log(result);

// Write a function to calculate the factorial of a given number.

// let num = 4;
// let numFac = 1;

// for (let i = 1; i <= num; i++) {
//   numFac *= i;
// }

// console.log(numFac);

// function calculateFactorial(num) {
//     let numFac = 1;

//     for (let i = 1; i <= num; i++) {
//       numFac *= i;
//     }

//     return numFac;
//   }
//   let result = calculateFactorial(4);
//   console.log(result);

// //   Write a function to generate the nth Fibonacci number.
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// console.log(fibonacci(6));

// // Implement the bubble sort algorithm to sort an array.
// function bubbleSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// console.log(bubbleSort(unsortedArray));

// // Implement the binary search algorithm to find the index of a given element in a sorted array.
// function binarySearch(arr, target) {
//   var low = 0;
//   var high = arr.length - 1;

//   while (low <= high) {
//     var mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return -1;
// }

// var sortedArray = [11, 12, 22, 25, 34, 64, 90];
// console.log(binarySearch(sortedArray, 22));

// Write a function to calculate the sum of elements in an array.
// function SumArr(arr){
//   return arr.reduce((sum, num) => sum + num, 0);
// }
// let number = [1,2,4,5,6]
// console.log(SumArr(number))

// Write a function to find the maximum and minimum values in an array.
// function findMaxMin(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   return { max, min };
// }

// let values = [8, 3, 11, 5, 7];
// console.log(findMaxMin(values));

// Write a function to filter out even numbers from an array
// function filterEvenNumbers(arr) {
//   return arr.filter(num => num % 2 === 0);
// }

// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(filterEvenNumbers(numbers));

// Write a function to reverse the elements of an array.
// function reverseArray(arr) {
//   return arr.reverse();
// }

// let fruits = ["apple", "banana", "orange"];
// console.log(reverseArray(fruits));

// Write a function to check if a specific element is present in an array.
// function containsElement(arr, element) {
//   return arr.includes(element);
// }
// let colors = ["red", "green", "blue"];
// console.log(containsElement(colors, "green"));

// Write a function to remove duplicate elements from an array.
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// let numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers));

// Write a function to calculate the average of elements in an array.
// function calculateAverage(arr) {
//   if (arr.length === 0) return 0;

//   let sum = arr.reduce((total, num) => total + num, 0);
//   return sum / arr.length;
// }

// let values = [10, 20, 30, 40, 50];
// console.log(calculateAverage(values));

// Write a function to rotate the elements of an array to the right by a specified number of positions.
// function rotateArray(arr, positions) {
//   const len = arr.length;
//   const index = positions % len;
//   return arr.slice(len - index).concat(arr.slice(0, len - index));
// }

// let letters = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateArray(letters, 2));

// Write a function to flatten a nested array.
// function flattenArray(arr) {
//   return arr.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
// }

// let nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray));

// function flat(arr) {
//     return arr.flat(Infinity);
//   }
//   let Array = [1, 2, 3, [4, 5], 6];
//   console.log(flat(Array));

// let num = 4;
// let numFac = 1;

// for (let i = 1; i <= num; i++) {
//   numFac *= i;
// }

// console.log(numFac);

// Exercise 1:
// Write a JavaScript function that takes an array of
// numbers as input and returns the sum of all the numbers in the array.

//     let num = [1,2,3]
//     let newArr = 0;
//     newArr = num.reduce((tut,cur) => {
//         return tut + cur
//     },0)

// console.log(newArr)

// let newArr = 0;
// function sumArr(arr){
//     newArr = (arr.reduce((tot,cur) => {
//         return tot + cur
//     },0))
//     console.log(newArr)
// };
// const arr = [1,2,3,1,2,3];
// sumArr(arr);

// Exercise 2:
// Write a JavaScript function that
// takes an array of strings and returns a new
//  array with the lengths of each string.

// let stringsArr = ["nino", "bacho"];
// let stringsLength = [];

// for (let i = 0; i < stringsArr.length; i++){
//     stringsLength.push(stringsArr[i].length)
// }
// console.log(stringsLength)

// let result = [];
// function string(stringArr){
// for (let i = 0; i < stringArr.length; i++){
//     result.push(stringArr[i].length)
// }
// }
// let stringArr = ["nino", "bacho"];
// string(stringArr);
// console.log(result)

// Exercise 3:
// Write a JavaScript function that takes an array of
// numbers and returns a new array with only the even numbers.

// let evenNumb = [];
// function EvenNum(numArr){
//     for(let i = 0; i <= numArr.length; i++){
//         if(numArr[i] % 2 === 0){
//             evenNumb.push(numArr[i])
//         }
//     }
// };
// let numArr = [10, 12, 13, 14, 15, 16];
// EvenNum(numArr);
// console.log(evenNumb)

// Exercise 4:
// Write a function that takes an array of numbers
// and returns the largest number in the array.

// let result = 0;
// function max(num){
//     for(let i = 0; i <= num.length; i++){
//         if(num[i] >= Math.max(...num)){
//             result += num[i]
//         }
//     }}
// let num = [1,2,3,88,4,5,6,77,99,222];
// max(num);
// console.log(result)

// Exercise 5:
// Write a function that takes an array of strings and returns a new array
//  with only the strings that have more than 5 characters.

// let fiveCh = [];

// function strings (str){
//     for(let i = 0; i < str.length; i++){
//         if(str[i].length > 5){
//             fiveCh.push(str[i])
//         }
//     }

// }
// let str = ["nino", "bachoo", "teklee", "ana", "tornikee"];
// strings(str);
// console.log(fiveCh);

// Exercise 6:
// Write a function that takes two arrays of numbers and returns a new array
//  that contains only the common elements between the two arrays (intersection).
// let newArr1 = [];
// function Common(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 newArr1.push(arr1[i])
//             }
//         }

//     }

// }
// let arr1 = [1,2,3,4,5,6,7,8,9];
// let arr2 = [1,2,3,6,7,5,9];
// Common(arr1, arr2);
// console.log(newArr1);

// let n = 0;
// function Product(x, y){
//     if(y > 0){
//        n = n + x;
//        return Product(x, y - 1)
//     } else {
//         return n
//     }
// };
// console.log(Product(2,3));

// function Product(x,y){

// };
// console.log(Product(2,3))

// Implement a recursive function called reverseString that takes a string as
// input and returns its reverse.
// For example, if the input is "hello," the function should return "olleh."

// let reverse = "";
// function reverseString(str) {
//     for(let i = str.length; i > 0; i--){
//         reverse += str[i - 1]
//     }
// };
// reverseString("hello");
// console.log(reverse);

// function reverseString(str) {
//     if (str === "") {
//       return "";
//     } else {
//       return str.charAt(0) + reverseString(str.slice(1));
//     }
//   }

//   console.log(reverseString("hello"));

// დაწერე countDown ფუნქცია რომელიც დაითვლის წამებს.
// მაგალითან თუ გადავცემთ 20 უნდა დაგვიბეჭდოს 20, 19 ,18 ... 0 ერთ წამიანი ინტერვალით.
// თუ გინდა გაუკეთე წუთების და საათების დათვლის შესაძლებლობაც.
// let result = [];
// function countDown(num){

// };
//  countDown(10);
// console.log(result);

// function countDown(startValue) {
//     let counter = startValue;

//     const intervalId = setInterval(() => {
//       console.log(counter);

//       if (counter === 0) {
//         clearInterval(intervalId);
//       } else {
//         counter--;
//       }
//     }, 1000);
//   }
//   countDown(20);

// function countDown(counter) {

//     if (counter === 0) {
//       console.log(counter);
//       return;
//     }
//     setTimeout(() => {
//       countDown(counter - 1);
//     }, 1000);

//     console.log(counter)
//   }
//   countDown(10);

// function reverseString(str) {
//     if (str === "") {
//       return "";
//     } else {
//       return str[str.length - 1] + reverseString(str.slice(0, -1));
//     }
//   }

//   console.log(reverseString("hello"));

// const input = [1, 2, 3, [4, [5, [5.6], 6], 7], 8];

// const res = [1, 2, 3];
// const elem = [4, [5, [5.6], 6], 7];
// const res2 = [];

// // Array flat recursive
// function flat(inputArray) {
//   let result = [];
//   let i = 0;
//   for (const element of inputArray) {
//     if (Array.isArray(element)) {
//       result = result.concat(flat(element));
//     } else {
//       result.push(element);
//     }
//   }
//   return result;
// }

// fuctorial of n
// function fuctorial(n) {
//   // 2
//   if (n < 0) {
//     console.log("Invalid input");
//     return;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return fuctorial(n - 1) * n;
// }

// const result = fuctorial(3);

// const numbers = [42, 17, 88, 5, 61, 29, 93, 10, 74, 50].sort();

// sumOfDigitsRecursive
// function sumOfDigits(n) {
//   if (n < 10) {
//     return n;
//   }
//   const lastDigit = n % 10;

//   return lastDigit + sumOfDigits((n - lastDigit) / 10);
// }

// const pasuxi = sumOfDigits(12);
// console.log("swori pasuxia: ", pasuxi);

// function product(x,y){
//   if(x === 0 || y === 0 ){
//     return 0;
//   } else {
//     return x + product(y - 1)
//   }
// }
// let result = product(2,3);
// console.log(result);

// Reverse Array:
// Write a function that reverses the elements of an array without using the built-in reverse() method.

// let newArr = [];
// function reverce (num){
//   for(let i = num.length ; i > 0; i--){
//      newArr.push(num[i - 1]);
//   }

// }
// reverce([1,2,3,4,5,6]);
// console.log(newArr);

// Sum of Array:
// Write a function that calculates
// the sum of elements in an array.

// let newArr ;
// function sumArray(arr){
//    newArr = arr.reduce((tot,cur) => {
//       return tot + cur
//     }, 0)
//   }
// sumArray([1,2,3]);
// console.log(newArr);

// Find the Max:
// Write a function that finds the
// maximum element in an array.

// function findMax(arr) {
//     if (arr.length === 0) {
//       return undefined;
//     }

//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }

//     return max;
//   }

//   const max = findMax([1, 2, 3, 5, 10, 9, 8, 7]);
//   console.log(max);

// function findMax(arr) {
//     if (arr.length === 0) {
//       return undefined;
//     }

//     return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
//   }

//   const max = findMax([1, 2, 3, 5, 10, 9, 8, 7]);
//   console.log(max);

// function findMax(arr) {
//     if (arr.length === 0) {
//       return undefined;
//     }

//     return Math.max(...arr);
//   }

//   const max = findMax([1, 2, 3, 5, 10, 9, 8, 7]);
//   console.log(max);

// Array Reverse:
// Write a function that reverses the elements of an array.

// let reverse = [];
// function reverseArray(arr) {
//     for (let i = arr.length; i > 0; i--){
//         reverse.push(arr[i - 1])
//     }

// }
// reverseArray([1,2,4,5,6,7])
// console.log(reverse)

// Array Even Numbers:
// Write a function that returns an
// array containing only the even numbers from the given array.

// let duplicate = [];
// function getEvenNumbers(arr) {
//     for (let i = 0; i <= arr.length; i++){
//         if(arr[i] % 2 === 0){
//             duplicate.push(arr[i])
//         }
//     }
// }
// getEvenNumbers([1,2,3,4,5,6,7,8,10]);
// console.log(duplicate)

// Remove Duplicates:
// Write a function that removes duplicate elements from an array.

// let remove = [];

// function removeDuplicates(arr) {
//     remove = arr.filter((el, index, array) => {
//         return array.indexOf(el) === index;
//     });
// }

// removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 7]);
// console.log(remove);

// let remove = [];

// function removeDuplicates(arr) {
//     remove = [...new Set(arr)];
// }

// removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 7]);
// console.log(remove);

// let remove = [];

// function removeDuplicates(arr) {
//     remove = arr.reduce((unique, el) => {
//         return unique.includes(el) ? unique : [...unique, el];
//     }, []);
// }

// removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 7]);
// console.log(remove);

// let remove = [];

// function removeDuplicates(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (remove.indexOf(arr[i]) === -1) {
//             remove.push(arr[i]);
//         }
//     }
// }

// removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 7]);
// console.log(remove);

// Array Sorting:
// Write a function that sorts an array in ascending order.

// let newArr = [];

// function sortArray(arr) {
//     newArr = [...arr];

//     for (let i = 0; i < newArr.length - 1; i++) {
//         for (let j = 0; j < newArr.length - 1 - i; j++) {
//             if (newArr[j] > newArr[j + 1]) {
//                 [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
//             }
//         }
//     }
// }

// sortArray([2, 4, 1, 5, 7, 3, 10, 9, 6]);
// console.log(newArr);

// let newArr = [];

// function sortArray(arr) {
//     newArr = [...arr].sort((a, b) => a - b);
// }

// sortArray([2, 4, 1, 5, 7, 3, 10, 9, 6]);
// console.log(newArr);

// let newArr = [];

// function sortArray(arr) {
//     newArr = [...arr];

//     for (let i = 1; i < newArr.length; i++) {
//         let currentElement = newArr[i];
//         let j = i - 1;

//         while (j >= 0 && newArr[j] > currentElement) {
//             newArr[j + 1] = newArr[j];
//             j--;
//         }

//         newArr[j + 1] = currentElement;
//     }
// }

// sortArray([2, 4, 1, 5, 7, 3, 10, 9, 6]);
// console.log(newArr);

// let newArr = [];

// function sortArray(arr) {
//     newArr = arr.sort((a, b) => a - b);
// }
// sortArray([2, 4, 1, 5, 7, 3, 10, 9, 6]);
// console.log(newArr);

// Map:
// Create a new array that contains the
// squares of each element in the given array.

// const squaredArray = [1, 2, 3, 4].map(num => num ** 2);
// console.log(squaredArray);

// let square = [];
// function mapArr (arr){
//     square = arr.map(e => e * e)
// }
// mapArr ([1,2,3,4]);
// console.log(square)

// Filter:
// Create a new array that contains
//  only the even numbers from the given array.

// Reduce:
// Calculate the sum of all elements in the given array.

// const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
// console.log(sum);

// ForEach:
// Print each element of the array to the console.

// const array = [1, 2, 3, 4];
// array.forEach(num => console.log(num));

// Every:
// Check if all elements in the array are greater than 0.
// const allPositive = [1, 2, 3, 4].every(num => num > 0);
// console.log(allPositive);

// Some:
// Check if at least one element in the array is negative.
// const hasNegative = [1, 2, 3, -4].some(num => num < 0);
// console.log(hasNegative);

// Find:
// Find the first element in the array that is greater than 5.
// const greaterThanFive = [1, 6, 3, 2].find(num => num > 5);
// console.log(greaterThanFive);

// FindIndex:
// Find the index of the first element in the array that is greater than 5.
// const greaterThanFive = [1, 6, 3, 2].find(num => num > 5);
// console.log(greaterThanFive);

// Includes:
// Check if the array includes the value 3.
// const includesThree = [1, 2, 3, 4].includes(3);
// console.log(includesThree);

// IndexOf:
// Find the index of the first occurrence of the value 4 in the array.
// const indexGreaterThanFive = [1, 6, 3, 2].findIndex(num => num > 5);
// console.log(indexGreaterThanFive);

// LastIndexOf:
// Find the index of the last occurrence of the value 4 in the array.
// const indexOfTypeFour = [1, 2, 4, 3, 4].indexOf(4);
// console.log(indexOfTypeFour);

// Slice:
// Create a new array that includes elements from index 2 to index 5 of the given array.
// const lastIndexOfFour = [1, 2, 4, 3, 4].lastIndexOf(4);
// console.log(lastIndexOfFour);

// Splice:
// Remove two elements starting from index 3 and replace them with the values 8 and 9.
// const slicedArray = [1, 2, 3, 4, 5].slice(2, 6);
// console.log(slicedArray);

// Concat:
// Concatenate the given array with another array [10, 11, 12].
// const concatenatedArray = [1, 2, 3].concat([4, 5, 6]);
// console.log(concatenatedArray);

// Join:
// Convert the array of strings ['Hello', 'World'] into a single string "Hello World".
// const joinedString = ['Hello', 'World'].join(' ');
// console.log(joinedString);

// Reverse:
// Reverse the order of elements in the array.
// const reversedArray = [1, 2, 3, 4, 5].reverse();
// console.log(reversedArray);

// Sort:
// Sort the array of strings ['banana', 'appleeeee', 'orange'] in alphabetical order.
// const sortedArray = ['banana', 'appleeeee', 'orange'].sort();
// console.log(sortedArray);

// Push:
// Add the value 13 to the end of the array.
// const arrayWithPush = [1, 2, 3];
// arrayWithPush.push(13);
// console.log(arrayWithPush);

// Pop:
// Remove the last element from the array.
// const arrayWithPop = [1, 2, 3];
// arrayWithPop.pop();
// console.log(arrayWithPop);

// Shift:
// Remove the first element from the array.
// const arrayWithShift = [1, 2, 3];
// arrayWithShift.shift();
// console.log(arrayWithShift);

// function product(x,y){
//     if(y === 0) return 0;
//     else if( y === 1 ) return x;
//     else if(y < 0)return -product (x, -y - 1) + x;
//     else return x + product (x, y - 1);
// }
// const result = product(3, -7)
// console.log(result)

6;

// function product(x, y) {
//     if (y === 0) return 0;
//     else if (y === 1) return x;
//     else if (y < 0) return -product(x, -y + 1) + x;
//     else return x + product(x, y - 1);
// }

// const result = product(-3, 7);
// console.log(result)

// let num = [10, 22, 2];

// let result = num[0] + (num[1] * num[2]);

// console.log(result);

// let result;
// let newArr;
// function array(num){
// result = num.map(el => {
//     return (el ** 2)
// })
// newArr = result.reduce((tot,cur) => tot + cur, 0)
// }
// array([1,2,3,4,5]);
// console.log(newArr);

// function product(x,y){
//     if(y === 0) return 0;
//     else if( y === 1 ) return x;
//     else if(y < 0)return -product (x, -y + 1) + x;
//     else return x + product (x, y - 1);
// }
// const result = product(-3, -7)
// console.log(result)

// const characters = [
//     {
//       name: "Luke Skywalker",
//       height: "172",
//       mass: "77",
//       eye_color: "blue",
//       gender: "male",
//     },
//     {
//       name: "Darth Vader",
//       height: "202",
//       mass: "136",
//       eye_color: "yellow",
//       gender: "male",
//     },
//     {
//       name: "Leia Organa",
//       height: "150",
//       mass: "49",
//       eye_color: "brown",
//       gender: "female",
//     },
//     {
//       name: "Anakin Skywalker",
//       height: "188",
//       mass: "84",
//       eye_color: "blue",
//       gender: "male",
//     },
//   ];

//   // Get an array of all names
//   let namesArr = characters.map(names => names.name);
//   console.log(namesArr)
//   // Get an array of all heights
//   let heightsArr = characters.map(heights => heights.height);
//   console.log(heightsArr)
//   // Get an array of objects with just name and height properties
//   const namesAndHeightsArray = characters.map(({ name, height }) => ({ name, height }));
//   console.log(namesAndHeightsArray);

// Get an array of all first names
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?

// Get an array of all first names
// const firstNamesArray = characters.map(character => character.name.split(' ')[0]);
// console.log("First Names:", firstNamesArray);

// // Get the total mass of all characters
// const totalMass = characters.reduce((acc, character) => acc + parseInt(character.mass), 0);
// console.log("Total Mass:", totalMass);

// // Get the total height of all characters
// const totalHeight = characters.reduce((acc, character) => acc + parseInt(character.height), 0);
// console.log("Total Height:", totalHeight);

// // Get the total number of characters in all the character names
// const totalCharactersInNames = characters.reduce((acc, character) => acc + character.name.length, 0);
// console.log("Total Characters in Names:", totalCharactersInNames);

// // Get the total number of characters by eye color
// const charactersByEyeColor = characters.reduce((acc, character) => {
//     acc[character.eye_color] = (acc[character.eye_color] || 0) + character.name.length;
//     return acc;
// }, {});
// console.log("Characters by Eye Color:", charactersByEyeColor);

// // Get characters with mass greater than 100
// const charactersWithMassGreaterThan100 = characters.filter(character => parseInt(character.mass) > 100);
// console.log("Characters with Mass > 100:", charactersWithMassGreaterThan100);

// // Get characters with height less than 200
// const charactersWithHeightLessThan200 = characters.filter(character => parseInt(character.height) < 200);
// console.log("Characters with Height < 200:", charactersWithHeightLessThan200);

// // Get all male characters
// const maleCharacters = characters.filter(character => character.gender === "male");
// console.log("Male Characters:", maleCharacters);

// // Get all female characters
// const femaleCharacters = characters.filter(character => character.gender === "female");
// console.log("Female Characters:", femaleCharacters);

// // Sort by name
// const charactersSortedByName = characters.slice().sort((a, b) => a.name.localeCompare(b.name));
// console.log("Sorted by Name:", charactersSortedByName);

// // Sort by mass
// const charactersSortedByMass = characters.slice().sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
// console.log("Sorted by Mass:", charactersSortedByMass);

// // Sort by height
// const charactersSortedByHeight = characters.slice().sort((a, b) => parseInt(a.height) - parseInt(b.height));
// console.log("Sorted by Height:", charactersSortedByHeight);

// // Sort by gender
// const charactersSortedByGender = characters.slice().sort((a, b) => a.gender.localeCompare(b.gender));
// console.log("Sorted by Gender:", charactersSortedByGender);

// // Does every character have blue eyes?
// const allCharactersHaveBlueEyes = characters.every(character => character.eye_color === "blue");
// console.log("Every Character has Blue Eyes:", allCharactersHaveBlueEyes);

// // Does every character have mass more than 40?
// const allCharactersHaveMassMoreThan40 = characters.every(character => parseInt(character.mass) > 40);
// console.log("Every Character has Mass > 40:", allCharactersHaveMassMoreThan40);

// // Is every character shorter than 200?
// const everyCharacterIsShorterThan200 = characters.every(character => parseInt(character.height) < 200);
// console.log("Every Character is Shorter than 200:", everyCharacterIsShorterThan200);

// // Is every character male?
// const everyCharacterIsMale = characters.every(character => character.gender === "male");
// console.log("Every Character is Male:", everyCharacterIsMale);

// // Is there at least one male character?
// const atLeastOneMaleCharacter = characters.some(character => character.gender === "male");
// console.log("At Least One Male Character:", atLeastOneMaleCharacter);

// // Is there at least one character with blue eyes?
// const atLeastOneCharacterWithBlueEyes = characters.some(character => character.eye_color === "blue");
// console.log("At Least One Character with Blue Eyes:", atLeastOneCharacterWithBlueEyes);

// // Is there at least one character taller than 200?
// const atLeastOneCharacterTallerThan200 = characters.some(character => parseInt(character.height) > 200);
// console.log("At Least One Character Taller than 200:", atLeastOneCharacterTallerThan200);

// // Is there at least one character that has mass less than 50?
// const atLeastOneCharacterWithMassLessThan50 = characters.some(character => parseInt(character.mass) < 50);
// console.log("At Least One Character with Mass Less than 50:", atLeastOneCharacterWithMassLessThan50);

// ფენდინგ, რეჯექთი, full fild

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout (() => {
//     throw Error ('Errorg')
//     reject ('Resolved')
//   }, 1000)
// });

// myPromise.then(console.log, (reason) => {
//   console.log("reason:", reason)
// });

// davaleba: shevkribot 2 promisi:

// const promise1 = new Promise((resolve) => {
//   setTimeout(resolve, 100, 5);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(resolve, 5000, 50);
// });

// Promise.all([promise1, promise2]).than(([val1, val2]) => {
//   console.log("sum:", val1 + val2)
// });

// const fakeAPICall = () => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 100, "Hello");
//   });
// };
// const fakeAPICall2 = () => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 500, "Hello");
//   });
// };

// Promise.race([fakeAPICall(), fakeAPICall2()])
// .than((res) =>  console.log(re))
// .catch();

// const fakeAPICall = () => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 500, "Hello");
//   });
// };
// const fakeAPICall2 = () => {
//   return new Promise((reject) => {
//     setTimeout(reject, 100, "error");
//   });
// };

// Promise.any([fakeAPICall(), fakeAPICall2()])
//   .then((res) => console.log(res))
//   .catch();



/*
1. შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება ან დარეჯექთდება უნდა იყოს 50/50.
   ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.

2. დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს https://jsonplaceholder.typicode.com/users დან 
   და დაბრუნებს ამ მონაცემებს

3. დავწეროთ ფუნქცია რომელიც ეცდება წამოიღოს მონაცემები 
https://jsonplaceholde.typicode.com (ლინკი სპეციალურად რასწორია) დან.
წარუმატებელი რექუესთის შემთხვევაში ხელახლა ცადოს წამოღება 5_ჯერ 

4. დავწეროთ ფუნქცია რომელიც ეცდება წმოიღოს მონაცემები https://dummyjson.com/users დან და https://jsonplaceholder.typicode.com/users დან.
   ფუნქციამ უნდა დაგვიბრუნოს ის ლისთი რომელის ცატვირთვაც უფრო მალე მოხდება.
*/


// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve('Succes')
//   }else {
//     reject('Failed')
//   }
// });

// p.then((message) => {
//   console.log(('This is in the then' + message))
// }).catch ((message) => {
//   console.log('This is in the catch' + message)
// });


// let listOfMovies = fetch('')


// const event = new Promise((resolve, reject) => {
//   let name = 'nino';
//   if(name == 'nino'){
//     resolve(name);
//   }else {
//     reject('name was not Nino, name was:' + name);
//   }
// });
// event.then((name) => {
//   console.log(name);
// }).catch((err) => {
//   console.log(err);
// }).finally(() => {
//   console.log('Promise finished');
// });


// const axios = require('axios');

// const fetchData = async() => {
//   try{
//   const data = await axios.get('https://cat-fact.herokuapp.com/facts');
//   console.log(data);
//   }
//   catch(err) {
//     console.log(err)
//   }
//   finally{
//     console.log('HELLO')
//   }
// };
// fetchData();

// data
// .then((res) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err)
// })
// .finally(() => [
//   console.log("promise resolved")
// ]);
// console.log(data);



// const fetchUsers = fetch ('data/users.json');
// const fetchColors = fetch ('data/colors.json');

// Promise.all([fetchUsers, fetchColors])
// .then(values => {
//   return Promise.all(values.map(r => r.json()));
// })
// .then(([users, colors]) => {
//   console.log(users);
//   console.log(colors)
// })
// .catch(e => {
//   console.log('caught');
//   console.log(e);
// });



// const promiseOne = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promiseOne Resolved');
//     // reject('promiseOne rejected')
//   },500);
// });
// const promiseTwo = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promiseTwo Resolved');
//     // reject('promiseTwo rejected')
//   },600);
// });
// const promiseThree= () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promiseThree Resolved');
//     // reject('promiseThree rejected')
//   },700);
// });

// const fetchData  = async () => {
//  try{

//   // const beforeTime = new Date();
//   // const responseOne = await promiseOne();
//   // const responseTwo = await promiseTwo();
//   // const responseThree = await promiseThree();
//   // const afterTime = new Date();

  
//   const response =await Promise.all([promiseOne(), promiseTwo(), promiseThree()]);
//   console.log('response from promise.all', response)

//   console.log(responseOne, responseTwo, responseThree, afterTime - beforeTime);
//  }
//  catch (error) {
//   console.log('error:', error)

//  }
// };
// fetchData();