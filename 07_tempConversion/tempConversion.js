const ftoc = function(num) {
  if (!isNaN(num)){
    let tempInCelsius = (num -32) * (5/9);
    return parseFloat(tempInCelsius.toFixed(1)); 
  }
  
};

const ctof = function(num) {
  if(!isNaN(num)){
    let tempInFarenheit = (num * (9/5)) + 32; 
    return parseFloat(tempInFarenheit.toFixed(1)); 
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
