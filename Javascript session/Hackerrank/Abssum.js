function diagonalDifference(arr) {
    let diagonalsum1=0;
    let diagonalsum2=0;
    let length = arr.length;  //store length of arr
    let column;
    for(let i=0;i<arr.length;i++) 
    {
        diagonalsum1 += arr[i][i]; //calculate diagonal sum where row equal column
        column = length - i - 1; //find column
        diagonalsum2 += arr[i][column];
    }
    
    return Math.abs(diagonalsum1 - diagonalsum2);
    

}