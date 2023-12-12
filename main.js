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
