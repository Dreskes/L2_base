
function findMissing(list) {
    const n = list.length;
    const totalDiff = list[n - 1] - list[0];
    const expectedDiff = totalDiff / n;
    
    for (let i = 0; i < n - 1; i++) {
        if (list[i + 1] - list[i] !== expectedDiff) {
            return list[i] + expectedDiff;
        }
    }
    
    return list[0];
}