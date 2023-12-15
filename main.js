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

