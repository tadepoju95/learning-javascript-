//Delete a property from an object 

const spaceship = {
  color: 'White',
  homePlanet: 'Earth',
  numCrew: 5
};

let deleteProperty = (obj, objProperty) => {
  let deleteObjectProperty = delete obj[objProperty]
  return deleteObjectProperty;
}
console.log(deleteProperty(spaceship, 'numCrew'));
console.log(spaceship);

//Display the first and last name of all the people

let peoplesInfo = [{
    firstName: 'Tom',
    lastName: 'Jerry',
    age: 40
  }, {
    firstName: 'Grace',
    lastName: 'Jones',
    age: 35
  }]

let displayFullNames = (obj, objKeyA, objKeyB) => {
  let getNames = '';
  obj.forEach(obj => {
    getNames += `${obj[objKeyA]} ${obj[objKeyB]} \n` 
  });
  return getNames;
}
console.log(displayFullNames(peoplesInfo, 'firstName', 'lastName'));
 
//function that accepts an object and tells you the length 

let person = {
  firstName: 'Loveth',
  lastName: 'King',
  age: 29
};

let returnLength = obj => {
  let getLengthOfObject = Object.keys(obj).length;
    return getLengthOfObject;
}
console.log(returnLength(person));

//function that checks whether an object contains the specified key 

let person = {
  firstName: 'Loveth',
  lastName: 'King',
  age: 29
};

let objectContainsKey = (obj, objKey) => {
  let checksIfObjectHasKey = person.hasOwnProperty(objKey);
    return checksIfObjectHasKey;
}
console.log(objectContainsKey(person, 'firstName'));

//write a function to sort the array of objects by title value 

let books = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
]

let sortArray = (obj, objValue) => {
  let sortByTitleValue = books.sort((a, b) => {
    if(a[objValue] < b[objValue]) {
      return -1;
    }
    if(a[objValue] > b[objValue]) {
      return 1;
    }
    return 0;
  });
  return sortByTitleValue;
}
console.log(sortArray(books, 'title'));