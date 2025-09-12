

function longest(arr, n) {
    let indexedArr = arr.map((str, index) => ({ str, index }));
    
    indexedArr.sort((a, b) => {
        if (b.str.length !== a.str.length) {
            return b.str.length - a.str.length;
        } else {
            return a.index - b.index;
        }
    });
    
    return indexedArr[n - 1].str;
}

console.log(longest(["Hello", "World", "Codewars", "Katas"], 3)); 