
function toWeirdCase(str) {
    const words = str.split(' ');
    
    const processedWords = words.map(word => {
        const characters = word.split('');
        
        const processedChars = characters.map((char, index) => {
            if (index % 2 === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        });
        
        return processedChars.join('');
    });
    
    return processedWords.join(' ');
}