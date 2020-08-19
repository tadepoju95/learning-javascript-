//function to calculate the factorial of a number

let calculateFactorialOfN = n => {
  if(n < 0) {
    return;
  }
  if(n === 0) {
    return 1;
  }
  return n * calculateFactorialOfN(n - 1);
}
console.log(calculateFactorialOfN(4));

//function to compute the sum of an array of integers

let findSumOfNumbers = arrayOfIntegers => {
  if(arrayOfIntegers.length === 0) {
    return 0;
  }
  return arrayOfIntegers[0] + findSumOfNumbers(arrayOfIntegers.slice(1));
}
console.log(findSumOfNumbers([1, 3, 25, 6, 9])); 

