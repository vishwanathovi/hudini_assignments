function divisibleSumPairs(n, k, ar) {
    let count = 0;
    let arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                    arr.push([ar[i], ar[j]]);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        count++;
    }
    return count;
}