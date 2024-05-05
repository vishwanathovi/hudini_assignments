function reverseString(str) {
    // Write your code here to reverse and return the string.
    let reverse="";
    for(i=str.length-1;i>=0;i--){
        reverse+= str[i];
    }
    return reverse;
}
console.log(reverseString("hello")); // Expected output: "olleh"