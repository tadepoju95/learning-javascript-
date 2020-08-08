//Delete a property from an object 
const spaceship = {
  color: 'White',
  homePlanet: 'Earth',
  numCrew: 5
};
delete spaceship['homePlanet'];
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

for (let property in peoplesInfo) {
  console.log(`${peoplesInfo[property].firstName} ${peoplesInfo[property].lastName}`)}; 

//function that accepts an object and tells you the length 

let person = {
  firstName: 'Loveth',
  lastName: 'King',
  age: 29
};

let returnLength = () => {
  let getLengthOfObject = Object.keys(person).length;
    return getLengthOfObject;
}
console.log(returnLength());