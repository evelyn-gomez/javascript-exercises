const add = function(a,b) {
	return a + b; 
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  let sum = array.reduce((prev,current)=>{
    return prev + current; 
    
  },0);
  return parseInt(sum); 
};

const multiply = function(array) {
  let product = array.reduce((prev,current) => {
    return prev * current; 
  })
  return product;
};

const power = function(a,b) {
  return Math.pow(a,b); 
};


const factorial = function(num) {
  if(num === 0 || num === 1 ){
    return 1; 
  }else if(num >1){
    return (num * factorial(num -1));  
  }
};

factorial(5);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
