
function hexStringToRGB(hex) {
  
    hex = hex.replace('#', '').toUpperCase();
    
   
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    
    return { r, g, b };
}


console.log(hexStringToRGB("#FF9933")); 
console.log(hexStringToRGB("#ff9933")); 
console.log(hexStringToRGB("#000000")); 
console.log(hexStringToRGB("#FFFFFF")); 