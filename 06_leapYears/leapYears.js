
const leapYears = function(num) {
    function divideBy4(num) {
        if (num % 4 === 0) {
            return true; //if divisible is leap yr. 
        } else {
            return false; 
        } 
    }
    function divideBy100(num){
        if (num %100 === 0){
            return false; 
            //is not leap year but
        } else {
            return true; //check for divisible  by 4 & 400 
        }
    }
    function divideBy400(num){
        if(num % 400 ===0){
            return true; // is leap
        }else{
          return false;   
        } 
    }
    
    if (num < 100){
        if (divideBy4(num)){
            return true;//num <100, divisible by 4, is leap yr. 
        } else {
            return false; //num < 100, not divisible by 4. 
        }
    } else {
        if(num < 400){
            if(divideBy4(num) && !divideBy100(num)){
                return true; 
            }else {
                return false
            }
        } else {
           // num is greater = to 400 +; 
           if (divideBy4(num)){
                if (divideBy100(num)){
                    return true; //num divisible by 4, and not by 100. 
                } else {
                    if (divideBy100(num) && divideBy400(num)){
                        return true; //num divisible by4 ,but not 100 & yes to 400.  
                    } else {
                        if (!divideBy100(num) && divideBy400(num)){
                            return true; 
                        } else {
                            return false; //num divisiby by 4, div    
                        }
                    }
                }
           }else {
               //not divisible by 4 - is not leap yr.
               return false;  
           }
        }
    }
};


// Do not edit below this line
module.exports = leapYears;
