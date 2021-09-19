const removeFromArray = function(array,...excludeArgs) {
    return array.filter(item => !excludeArgs.includes(item)); 
};  
// Do not edit below this line
module.exports = removeFromArray;
