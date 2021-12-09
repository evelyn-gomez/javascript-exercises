function removeNonLetters(str){
  let arrayOfStr = str.split(''); 
  let newString = arrayOfStr
                          .filter(element =>  element !== ',' && element !== '.' && element !== '!')
                          .join('')
                          .toString()
                          .replace(/\s+/g, '')
  return newString; 
}


const palindromes = function (str) {
  let string = removeNonLetters(str); 
  let reversedString = [...string]
                                  .reverse()
                                  .join(''); 
  if (string.toLowerCase() === reversedString.toLowerCase()){
    return true; 
  }
  return false;
};

// console.log(palindromes('racecar')); 
// Do not edit below this line
module.exports = palindromes;
