
function hasTwoCubeSums(n) {
    let count = 0;
    
    for (let a = 1; a * a * a < n; a++) {
        const a3 = a * a * a;
        const remaining = n - a3;
        const b = Math.round(Math.cbrt(remaining));
        const b3 = b * b * b;
        
        if (a3 + b3 === n && a < b) {
            count++;
            if (count >= 2) {
                return true;
            }
        }
    }
    
    return false;
}