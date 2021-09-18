const removeFromArray = function(array,...excludeArgs) {
    let excludeArray = Array.from(excludeArgs); 
    // let numsToExclude = excludeArray.filter(item => !isNaN(item))
    return array.filter(item => !excludeArray.includes(item)); 
};  
// Do not edit below this line
module.exports = removeFromArray;
