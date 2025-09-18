
function howManyTimes(time1, time2) {
    const start = new Date(time1.replace(' ', 'T') + 'Z');
    const end = new Date(time2.replace(' ', 'T') + 'Z');
    
    let total = 0;
    
   
    let hour = new Date(start);
    hour.setUTCMinutes(0, 0, 0);
    
    while (hour < end) {
        if (hour >= start) {
            const hourValue = hour.getUTCHours();
            const hour12 = hourValue % 12 || 12;
            
           
            const strikesInInterval = Math.min(
                hour12,
                Math.floor((end.getTime() - hour.getTime()) / 1000)
            );
            total += strikesInInterval;
        }
        hour.setUTCHours(hour.getUTCHours() + 1);
        hour.setUTCMinutes(0, 0, 0);
    }
    
   
    let halfHour = new Date(start);
    halfHour.setUTCMinutes(30, 0, 0);
    
    while (halfHour < end) {
        if (halfHour >= start) {
           
            if (halfHour.getTime() + 1000 <= end.getTime()) {
                total += 1;
            }
        }
        halfHour.setUTCHours(halfHour.getUTCHours() + 1);
        halfHour.setUTCMinutes(30, 0, 0);
    }
    
    return total;
}