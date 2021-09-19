const sumAll = function(a,b) {
    let allNums = []; 

    if((!Number.isInteger(a)) || (!Number.isInteger(b))){
        return 'ERROR'
    }else if (a < 0 || b < 0){
        return 'ERROR'
    } else {
        if (a < b){
            for(let i=a; i >=a && i <= b; i++){
                allNums.push(i);
            };     
        } else {
            for(let i=b; i <= a && i >= b; i++){
                allNums.push(i);
            };  
        }
    }
    let addingNums = (prevVal, currentVal) =>
        prevVal + currentVal; 
    return allNums.reduce(addingNums);
};


// Do not edit below this line
module.exports = sumAll;
