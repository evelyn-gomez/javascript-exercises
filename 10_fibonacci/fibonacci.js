
const fibonacci = function(num) {
  let n = parseInt(num);
  if( n < 0){
    return 'OOPS';
  } else if( n ===1){
    return 1; 
  }
  let array =[0,1];
  let current; 
  for(let i=1; i < n; i++){ 
    current = array[i]; 
    let prev = array[i-1]; 
    current += prev;
    array.push(current); 
  }
  return current; 
};

console.log(fibonacci('1'));


// Do not edit below this line
module.exports = fibonacci;
