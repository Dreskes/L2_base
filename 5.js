
function primeFactors(n) {
    let result = '';
    let factor = 2;
    
    while (n > 1) {
        let count = 0;
        
     
        while (n % factor === 0) {
            count++;
            n /= factor;
        }
        
       
        if (count > 0) {
            if (count === 1) {
                result += `(${factor})`;
            } else {
                result += `(${factor}**${count})`;
            }
        }
        
        factor++;
    }
    
    return result;
}


console.log(primeFactors(86240)); 
console.log(primeFactors(7775460)); 
console.log(primeFactors(7919)); 