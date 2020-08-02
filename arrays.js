//function takes in array and number parameter
//return the first n elements of that array
/*
1. write a function that takes in array and number as parameters 
2. declare a variable and define it by using the slice method on our array
so we can get our select elements from it
3. return the elements variable
*/

let returnElement = (array, numberN) => {
  let elements = array.slice(0, numberN)
  return elements;
}
console.log(returnElement(['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'], 2));