function miniMaxSum(arr) {
    
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
        
        if (arr[i]>max) {
            max = arr[i];
        }
        
        if (arr[i]<min) {
            min =arr[i];
        }
    }
    
    let minSum = sum-max;
    let maxSum = sum-min;
    console.log(minSum + " " + maxSum);
}
    
//     another method:
  
//     arr.sort();
//     let minSum = 0;
//     for (let i=0; i<arr.length-1; i++) {
//         minSum += arr[i];
//     }
//     let maxSum = 0;
//     for (let i=1; i<arr.length; i++) {
//         maxSum += arr[i];
//     }
//     console.log(minSum + " " + maxSum);
// }

