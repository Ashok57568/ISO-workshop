// Write a function that takes the base and height of a triangle and return its area.
function areaofTriangle(b,h){
    return (b*h)/2;
}
console.log(areaofTriangle(4,3));



// Write a function that returns the string "something" joined with a space " " and
// the given argument a.
function something(x){
    return `something ${x}`;
}
console.log(something("is better then having nothing"))


// You are counting points for a basketball game, given the amount of 2-pointers scored and
// 3-pointers scored, find the final points for the team and return that value.
function points(a,b){
    return 2*a+3*b;
}
console.log(points(4,3));
// Given two numbers, return true if the sum of both numbers is less than 100.
// Otherwise return false.
function sum(a,b){
    if ((a+b)<100){
        return true;
    }
    else{
       return false;
    }
}
console.log(sum(22,23));
// Create a function that takes a number as an argument. Add up all the numbers from 1 to
// the number you passed to the function. For example, if the input is 4 then your function
// should return 10 because 1 + 2 + 3 + 4 = 10.
function sumUpTo(num) {
    let add = 0;
    for (let i = 1; i <= num; i++) {
      add += i;
    }
    return add;
  }
  
  // Example usage:
  const num = 4;
  const add= sumUpTo(num);
  console.log(`The sum of all numbers from 1 to ${num} is ${add}.`);
//   Create a function that determines whether a number is Oddish or Evenish. A number is
// Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its
// digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
function oddishOrEvenish(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum % 2 === 0 ? "Evenish" : "Oddish";
  }
  
  // Example usage:
  console.log(oddishOrEvenish(43)); // "Oddish"
  console.log(oddishOrEvenish(222)); // "Evenish"

//   Create a function that returns true if there's at least one prime number in the given
// range (n1 to n2 (inclusive)), false otherwise.
function hasPrimeNumber(n1, n2) {
    for (let num = n1; num <= n2; num++) {
      if (num > 1) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          return true;
        }
      }
    }
    return false;
  }
  
  // Example usage
  let n1 = 10;
  let n2 = 20;
  if (hasPrimeNumber(n1, n2)) {
    console.log(`There is at least one prime number between ${n1} and ${n2}.`);
  } else {
    console.log(`There are no prime numbers between ${n1} and ${n2}.`);
  }
  
//   The left shift operation is similar to multiplication by powers of two.
//   Sample calculation using the left shift operator (<<):
//   10 << 3 = 10 * 2^3 = 10 * 8 = 80
//   -32 << 2 = -32 * 2^2 = -32 * 4 = -128
//   5 << 2 = 5 * 2^2 = 5 * 4 = 20
//   Write a function that mimics (without the use of <<) the left shift operator and returns
//   the result from the two given integers.  
function shiftToLeft(x, y) {
    return x * Math.pow(2, y);
  }
  console.log(shiftToLeft(10, 3));   // Output: 80
  console.log(shiftToLeft(-32, 2));  // Output: -128
  console.log(shiftToLeft(5, 2));    // Output: 20
//   Create a function that returns a base-2 (binary) representation of a base-10 (decimal)
// string number. To convert is simple: ((2) means base-2 and (10) means base-10)
// 010101001(2) = 1 + 8 + 32 + 128.
// Going from right to left, the value of the most right bit is 1, now from that every bit to the
// left will be x2. The values of an 8 bit binary number are (256, 128, 64, 32, 16, 8, 4, 2, 1).
function decimalToBinary(num) {
    let binary = "";
    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }
    return binary || "0";
  }
  console.log(decimalToBinary(1));    // Output: "1"
  console.log(decimalToBinary(10));   // Output: "1010"
  console.log(decimalToBinary(100));  // Output: "1100100"
    