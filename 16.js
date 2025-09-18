

Array.prototype.square = function() {
    return this.map(num => num * num);

};

​

Array.prototype.cube = function() {

    return this.map(num => num * num * num);

};

​

Array.prototype.sum = function() {

    return this.reduce((total, num) => total + num, 0);

};

​
Array.prototype.average = function() {

    if (this.length === 0) return NaN;
    return this.sum() / this.length;
};
​

Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {

    return this.filter(num => num % 2 !== 0);
};
const numbers = [1, 2, 3, 4, 5];

​

console.log(numbers.square());   
console.log(numbers.cube());     
console.log(numbers.average());  
console.log(numbers.sum());      
console.log(numbers.even());     
console.log(numbers.odd());      
console.log(numbers); 
const empty = [];
console.log(empty.average());