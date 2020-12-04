const fs = require('fs');

let validPass = 0;

let passArray = fs.readFileSync('../input.txt', 'utf-8').split('\n');
passArray.pop();
passArray.forEach((passPatt) => {
    let pass = passPatt.split(':')[1];
    let letter = passPatt.split(':')[0].split(' ')[1];
    let reg = new RegExp(letter, "g");
    let min = passPatt.split(':')[0].split(' ')[0].split('-')[0];
    let max = passPatt.split(':')[0].split(' ')[0].split('-')[1];
    let numberLetter = pass.length - pass.replace(reg, '').length;
    if (numberLetter >= min && numberLetter <= max) {
        validPass++;
    }
});

console.log(validPass);