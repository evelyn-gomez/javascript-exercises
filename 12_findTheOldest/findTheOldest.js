const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
function getAge(element){
  let lastYear = parseInt(element.yearOfDeath);
  if (isNaN(lastYear)) {
    lastYear = new Date().getFullYear()
  }
  return lastYear - element.yearOfBirth
}

function getOldest(obj){
 let arrayOfAges = obj  
      .map(element => getAge(element))
      .sort();
  return arrayOfAges[arrayOfAges.length -1];
};

const findTheOldest = function(arr) {
  let maxAge = getOldest(arr);
  for(let i = 0; i < arr.length; i++){
    let age = getAge(arr[i]);
    if(age === maxAge){
      return arr[i]; 
    }
  } 
}

/** @typedef {{ name: string, yearOfBirth: number, yearOfDeath: number | undefined }} Person */

/**
 * 
 * @param {Person[]} people 
 * @returns {string}
 */
function findTheOldest2(people) {
  let oldest = people[0];
  let maxAge = getAge(oldest);
  for (let person of people) {
    let age = getAge(person);
    if (age > maxAge) {
      maxAge = age;
      oldest = person;
    }
  } 
  return person;
}
console.log(getOldest(people));



// Do not edit below this line
module.exports = findTheOldest;
