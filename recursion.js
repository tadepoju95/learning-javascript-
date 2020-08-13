//function to calculate the factorial of a number

let calculateFactorialOfN = n => {
  let getFactorial = 1;
  for(let i = n; i >= 1; i--) {
    getFactorial = getFactorial * i;
  }
  return getFactorial;
}
console.log(calculateFactorialOfN(6));

//function to compute the sum of an array of integers

let findSumOfNumbers = arrayOfIntegers => {
  let addingAllNumbers = arrayOfIntegers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
return addingAllNumbers;
}
console.log(findSumOfNumbers([1, 3, 25, 6, 9]));

