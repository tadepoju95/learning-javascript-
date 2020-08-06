//function takes in array and number parameter
//return the first n elements of that array
/*
1. write a function that takes in array and number as parameters 
2. declare a variable and define it by using the slice method on our array
so we can get our select elements from it
3. return the elements variable
*/

let returnElement = (array, numberN) => {
  let elements = array.slice(0, numberN);
  return elements;
}
console.log(returnElement(['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'], 2));

//join all elements of an array into a string 
/*
1. write a function that takes in array as parameter
2. declare a variable and define it by using the join and replace methods on our array
3. return the joining variable
*/

let joinElements = (array) => {
  let joining = array.join('').replace(/\s/g, '');
  return joining;
}
console.log(joinElements(['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha']));

//sort the items of an array 
/*
1. write a function that takes in an array as parameter
2. declare a variable and define it by using the sort method on our array
3. return the sorting variable
*/

let sortItems = (array) => {
  let sorting = array.sort((a, b) => a - b);
  return sorting;
}
console.log(sortItems([-3, 8, 7, 6, 5, -4, 3, 2, 1])); 

//remove duplicate items 
/*
1. write a function that takes in an array as parameter
2. declare a variable and define it by using the filter method on our array
3. use the callback function to test each element 
4. return the variable
*/

let removeDuplicate = (array) => {
  let removeDuplicatedItems = array.filter((element,index) => {
    return array.indexOf(element) === index;
  });
    return removeDuplicatedItems;
}
console.log(removeDuplicate(['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha', 'Mustard', 'Ketchup']));




