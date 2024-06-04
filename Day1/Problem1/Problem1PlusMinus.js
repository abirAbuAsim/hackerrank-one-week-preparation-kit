/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
 * 
 * Verdict: Accepted  
*/
'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const arrayLength = arr.length;
    let plusCount = 0;
    let minusCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            zeroCount++;
        } else if (arr[i] < 0) {
            minusCount++;
        } else if (arr[i] > 0) {
            plusCount++;
        }
    }
    console.log(parseFloat(plusCount/arrayLength).toFixed(6));
    console.log(parseFloat(minusCount/arrayLength).toFixed(6));
    console.log(parseFloat(zeroCount/arrayLength).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
