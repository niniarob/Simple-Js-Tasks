// How many people? 8
// how many pizzas do you have? 4

// let people = prompt("how many people?");
// let pizza = prompt("how many pizza do you have?");
// let result = pizza / people

// console.log(result);



// Write a function to calculate the factorial of a given number.

let num = 4;
let numFac = 1;

for (let i = 1; i <= num; i++) {
  numFac *= i;
}

console.log(numFac);


function calculateFactorial(num) {
    let numFac = 1;
  
    for (let i = 1; i <= num; i++) {
      numFac *= i;
    }
  
    return numFac;
  }
  let result = calculateFactorial(4);
  console.log(result); 
  

//   Write a function to generate the nth Fibonacci number.
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6)); 


// Implement the bubble sort algorithm to sort an array.
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray)); 


// Implement the binary search algorithm to find the index of a given element in a sorted array.
function binarySearch(arr, target) {
  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

var sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log(binarySearch(sortedArray, 22));

