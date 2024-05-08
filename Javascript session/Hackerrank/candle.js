function birthdayCakeCandles(candles) {
    let max=0;
    let count=0;
    for(let i=0;i<candles.length;i++){
        if(candles[i]==max){
            count++;
        }
        if(candles[i]>max){
            max = candles[i];
            count=1;
        }
    }
    return count;

}
