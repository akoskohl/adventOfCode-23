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
