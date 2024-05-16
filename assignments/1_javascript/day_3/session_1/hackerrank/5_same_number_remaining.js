'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    let maxCount = 0;
    let count = 0;
    for(let i = 0;i < arr.length; i++){
        count = 0;
        for(let j = 0; j < arr.length; j++){
        if(arr[i] == arr[j]){
            count++;
        }
        }
        if(maxCount < count){
            maxCount = count;
        }
        }
           return arr.length - maxCount;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = equalizeArray(arr);

    ws.write(result + '\n');

    ws.end();
}
