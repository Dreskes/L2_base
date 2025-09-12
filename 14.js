
function isCircleSorted(arr) {
    let count = 0;
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }
    
   
    return count <= 1;
}


console.log(isCircleSorted([2, 3, 4, 5, 0, 1]));      
console.log(isCircleSorted([4, 5, 6, 9, 1]));          

console.log(isCircleSorted([4, 1, 2, 5]));             
console.log(isCircleSorted([8, 7, 6, 5, 4, 3]));       
