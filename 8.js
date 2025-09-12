
function expandedForm(num) {
    let str = num.toString();
    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0') {
            let zeros = '0'.repeat(str.length - i - 1);
            result.push(str[i] + zeros);
        }
    }
    
    return result.join(' + ');
}


console.log(expandedForm(12));   
console.log(expandedForm(45));    
console.log(expandedForm(70304)); 
console.log(expandedForm(900000));