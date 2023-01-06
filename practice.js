// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// // Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = {chi: 2700000};
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 

// for (var i = 1; i < 100; i++){
//   console.log(i)
// }

// var i = 0;
// while (i < 100) {
//   i++;
//   console.log(i);
// }



// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// var num = 1;
// while (num <= 100) {
//   console.log(num);
//   num += 2;
// }


// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// var number = [41, 7, 42, 55, 73, 24, 55, 2];
// var x = number.filter(num => num === 55); 
// console.log(x.length);



// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
// function awesomesauce(string) {
// string.forEach(function(string) {
//   console.log(string);
//   awesomeArray.push(string);
//   awesomeArray.push("awesomesauce");
// });
// awesomeArray.pop();
// console.log(awesomeArray);
// }


// awesomesauce(["a", "b", "c", "d", "e"]);



// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// var itemAmounts = {chair: 5, table: 2}
// itemAmounts.chair = 3;
// console.log(itemAmounts);


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// function factorial(number) {
//   if number === 1 {
//     return 1
//   } {
//   else if 
//   number * factorial(number - 1)
//   }
// }


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].



// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function getEven(array) {
//   var j = [];
//   for (var i = 0; i < array.length; i += 2) {
//     j.push(array[i]);
//   }
//   return j; 
// } 
// console.log(getEven(["a", "b", "c", "d", "e", "f"]));

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function maxNumber(array) {
//   var max = array[0]; 
//   for (var i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// console.log(maxNumber([5, 4, 8, 1, 2]))


// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
// if number < 0 
//   p "cannot"
//   elsif number <= 1 
//   p 1 
//   else 
//   number * factorial(number - 1)
// end 

function getFactorial(number) {
  if (number === 0 || number === 1) {
    return 1; 
  } else {
    var numbs = 1;
    for (var i = 1; i < 1; i++) {
      numbs *= i;
    }
  }
  console.log(numbs);
}

console.log(getFactorial(5));