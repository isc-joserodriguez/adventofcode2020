const fs = require('fs');
let validDocs = 0;
fs.readFileSync('../input.txt', 'utf-8').split('\n\n').forEach((doc) => {
    let temp = doc.replace('\n', ' ').replace(' : ', ':');
    if (temp.includes('byr') &&temp.includes('iyr') &&temp.includes('eyr') &&temp.includes('hgt') &&temp.includes('hcl') &&temp.includes('ecl') &&temp.includes('pid')) {
        validDocs++;
    }
});

console.log(validDocs);