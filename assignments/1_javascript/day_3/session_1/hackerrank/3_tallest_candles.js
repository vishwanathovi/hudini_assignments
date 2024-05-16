
function birthdayCakeCandles(candles) {
    let largest = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > largest) {
            largest = candles[i];
        }
    }
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == largest) {
            count++;
        }
    }
    return count;
}