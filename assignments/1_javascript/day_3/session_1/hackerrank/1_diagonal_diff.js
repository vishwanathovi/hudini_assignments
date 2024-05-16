function diagonalDifference(arr) {
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;
    for (let i=0; i <= arr.length - 1; i++) {
        diagonalSum1 += arr[i][i];
        diagonalSum2 += arr[i][arr.length - i - 1];
    }
    return Math.abs(diagonalSum2 - diagonalSum1);
}  