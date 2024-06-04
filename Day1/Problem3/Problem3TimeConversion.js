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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let result = '';
    const period = s.slice(s.length-2);
    const onlyTime = s.slice(0, s.length-2);
    const timeArray = onlyTime.split(':');
    const hours = timeArray[0];
    let militaryHours;
    if(period === 'PM') {
         militaryHours = (hours > 11) ? hours : parseInt(hours)+12;
    } else if (period === 'AM') {
        militaryHours = (hours > 11) ? 0 : hours;
    }
    const minutes = timeArray[1];
    const seconds = timeArray[2];
    return `${militaryHours === 0 ? '00': militaryHours}:${minutes}:${seconds}`;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}