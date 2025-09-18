
function createPhoneNumber(numbers) {
 
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');
    
   
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}


function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}


function createPhoneNumber(numbers) {
    const numStr = numbers.join('');
    return `(${numStr.substring(0, 3)}) ${numStr.substring(3, 6)}-${numStr.substring(6)}`;
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
console.log(createPhoneNumber([5, 5, 5, 8, 6, 7, 5, 3, 0, 9])); 
console.log(createPhoneNumber([0, 9, 8, 7, 6, 5, 4, 3, 2, 1])); 