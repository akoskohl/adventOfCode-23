const fs = require('fs');

day = '01'
inputFile = 'day' + day + 'part' + day + '-input.txt';
// inputFile = 'day01part1-test.txt';
input = [];
solution();

function solution() {
    readInputfile(inputFile);
}
function readInputfile (inputFile) {
    input = fs.readFileSync(inputFile, "utf-8").split("\n");
}

function calibrateAndSumValues (input) {
    summerizedValues = 0;
    for (let i = 0; i < input.length; i++) {
        firstDigit = getFirstIntegerFromString(input[i]);
        lastDigit = getLastIntegerFromString(input[i]);
    }
function reverseString (string) {
    return string.split("").reverse().join("");
}

function getFirstIntegerFromString (string) {
    return String(string.match(/[0-9]+/)).charAt(0);
}

function getLastIntegerFromString (string) {
    return String(reverseString(string).match(/[0-9]+/)).charAt(0);
}