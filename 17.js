

Array.prototype.square = function() {
    return this.map(num => num * num);
};

Array.prototype.cube = function() {
    return this.map(num => num * num * num);
};

Array.prototype.sum = function() {
    return this.reduce((total, num) => total + num, 0);
};

Array.prototype.average = function() {
    if (this.length === 0) return NaN;
    return this.sum() / this.length;
};

Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
    return this.filter(num => num % 2 !== 0);
};


function cache(fn) {
    const cacheMap = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cacheMap.has(key)) {
            return cacheMap.get(key);
        }
        
        const result = fn.apply(this, args);
        cacheMap.set(key, result);
        return result;
    };
}


const numbers = [1, 2, 3, 4, 5];
console.log('Square:', numbers.square());    
console.log('Cube:', numbers.cube());       
console.log('Sum:', numbers.sum());         
console.log('Average:', numbers.average());  
console.log('Even:', numbers.even());        
console.log('Odd:', numbers.odd());         


const complexFunction = function(arg1, arg2) {
    console.log('Complex calculation executed with:', arg1, arg2);
    return arg1 + ' ' + arg2;
};

const cachedFunction = cache(complexFunction);
console.log('First call:', cachedFunction('foo', 'bar'));  
console.log('Second call:', cachedFunction('foo', 'bar')); 
console.log('Third call:', cachedFunction('foo', 'baz')); 