const fs = require('fs');
let validDocs = 0;
fs.readFileSync('../input.txt', 'utf-8').split('\n\n').forEach((doc) => {
    let temp = doc.replace(/\n/g, ' ').split(' ').sort();
    if (temp[1].includes("cid")) {
        temp.splice(1, 1);
    }
    if (temp.length == 7) {
        if (temp[0].split(':')[0] == 'byr' && parseInt(temp[0].split(':')[1]) >= 1920 && parseInt(temp[0].split(':')[1]) <= 2002) {
            if (temp[1].split(':')[0] == 'ecl' && 'amb blu brn gry grn hzl oth'.includes(temp[1].split(':')[1])) {
                if (temp[2].split(':')[0] == 'eyr' && parseInt(temp[2].split(':')[1]) >= 2020 && parseInt(temp[2].split(':')[1]) <= 2030) {
                    if (temp[3].split(':')[0] == 'hcl' && temp[3].split(':')[1].length == 7 && !temp[3].split(':')[1].substring(1).match(/[^A-Fa-f0-9]+/g)) {
                        if (temp[4].split(':')[0] == 'hgt') {
                            let typeIndex = temp[4].split(':')[1].length - 2;
                            let hgtType = temp[4].split(':')[1].substring(typeIndex); //cm || in
                            let hgtVal = parseInt(temp[4].split(':')[1].substring(0, typeIndex));
                            if ((hgtType == 'cm' && hgtVal >= 150 && hgtVal <= 193) || (hgtType == 'in' && hgtVal >= 59 && hgtVal <= 76)) {
                                if (temp[5].split(':')[0] == 'iyr' && parseInt(temp[5].split(':')[1]) >= 2010 && parseInt(temp[5].split(':')[1]) <= 2020) {
                                    if (temp[6].split(':')[0] == 'pid' && temp[6].split(':')[1].length == 9 && !temp[6].split(':')[1].match(/[^0-9]+/g)) {
                                        validDocs++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});

console.log(validDocs);


/*
[
  'pid:758934555'
]

  */