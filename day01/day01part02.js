const fs = require('fs');

day = '01'
inputFile = 'day' + day + 'part' + day + '-input.txt';
input = [];
numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

calibratedValues = [];

solution();

function solution() {
    readInputfile(inputFile);
function readInputfile (inputFile) {
    input = fs.readFileSync(inputFile, "utf-8").split("\n");
}

}
function getLastWrittenIntegerFromString (string) {
    lastWrittenInt = '';
    indexOfLastWrittenInt = -1;
    
    for (let i=0; i < numbers.length; i++) {
        if (string.includes(numbers[i])) {
            if (indexOfLastWrittenInt < 0) {
                lastWrittenInt = i+1;
                indexOfLastWrittenInt = string.lastIndexOf(numbers[i]);
            }
            if (indexOfLastWrittenInt < string.lastIndexOf(numbers[i])) {
                lastWrittenInt = i+1;
                indexOfLastWrittenInt = string.lastIndexOf(numbers[i]);
            }
        }
    }
    return lastWrittenInt;
}
function getFirstWrittenIntegerFromString (string) {
    firstWrittenInt = '';
    indexOfFirstWrittenInt = -1;
    
    for (let i=0; i < numbers.length; i++) {
        if (string.includes(numbers[i])) {
            if (indexOfFirstWrittenInt < 0) {
                firstWrittenInt = i+1;
                indexOfFirstWrittenInt = indexOfSubString(string, numbers[i]);    
            }
            if (indexOfFirstWrittenInt > indexOfSubString(string, numbers[i])) {
                firstWrittenInt = i+1;
                indexOfFirstWrittenInt = indexOfSubString(string, numbers[i]);    
            }
        }
    }
    return firstWrittenInt;
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