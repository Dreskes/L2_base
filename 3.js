
function whatCentury(year) {
    
    let century = Math.ceil(Number(year) / 100);
    
   
    let suffix;
    if (century % 100 >= 11 && century % 100 <= 13) {
        suffix = 'th';
    } else {
        switch (century % 10) {
            case 1: suffix = 'st'; break;
            case 2: suffix = 'nd'; break;
            case 3: suffix = 'rd'; break;
            default: suffix = 'th';
        }
    }
    
    return century + suffix;
}


console.log(whatCentury("1999")); 
console.log(whatCentury("2011")); 
console.log(whatCentury("2000")); 