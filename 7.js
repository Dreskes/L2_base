
function wave(str) {
    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            let waveStr = str.split('');
            waveStr[i] = waveStr[i].toUpperCase();
            result.push(waveStr.join(''));
        }
    }
    
    return result;
}

console.log(wave("hello")); 
console.log(wave(" s p a c e s "));
