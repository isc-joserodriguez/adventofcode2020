const fs = require('fs');

let validPass = 0;

let passArray = fs.readFileSync('../input.txt', 'utf-8').split('\n');
passArray.pop();
passArray.forEach((passPatt) => {
    let pass = passPatt.split(':')[1];
    let letter = passPatt.split(':')[0].split(' ')[1];
    let first = passPatt.split(':')[0].split(' ')[0].split('-')[0];
    let second = passPatt.split(':')[0].split(' ')[0].split('-')[1];
    if ((pass[first] == letter || pass[second] == letter) && pass[first] != pass[second]) {
        validPass++;
    }
});

console.log(validPass);