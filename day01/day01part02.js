const fs = require('fs');

day = '01'
inputFile = 'day' + day + 'part' + day + '-input.txt';
input = [];
calibratedValues = [];

solution();

function solution() {
    readInputfile(inputFile);
function readInputfile (inputFile) {
    input = fs.readFileSync(inputFile, "utf-8").split("\n");
}

}
function getFirstIntegerFromString (string) {
    return String(string.match(/[0-9]+/)).charAt(0);
}

function getLastIntegerFromString (string) {
    return String(reverseString(string).match(/[0-9]+/)).charAt(0);
}

function indexOfSubString (input, stringToFind) {
    return String(input).indexOf(stringToFind);
}

function reverseString (string) {
    return string.split("").reverse().join("");
}