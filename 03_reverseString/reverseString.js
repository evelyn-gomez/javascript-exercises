const reverseString = function(str){
    let reversedStr =''; 
    for (let i = str.length ; i > -1 ; i--){
        let charAtStr = str.charAt(i); 
        reversedStr += charAtStr;  
    }
    return reversedStr; 
}
//  other Option is 
    // function (str){
    //     return reversed = str.split('').reverse().join('')  
    // }


// Do not edit below this line
module.exports = reverseString;
