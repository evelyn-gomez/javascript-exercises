# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

## Reflection
 My current solution was not the best but it worked for me. I review the solution for this on TOP and found that using the .reduce() method would have yieled a cleaner result. I did try a few times using it but couldn't figure out how to make it work for me. 

 I am also adding another solution that my mentor went over with me on here 

```Javascript 
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
```
This was much cleaner imo than using ```reduce()``` method. 