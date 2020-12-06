const fs = require('fs');
count = 0;
fs.readFileSync('../input.txt', 'utf-8').split('\n\n').forEach((group, i) => {

    let orderGroup = group.split('\n').sort((a, b) => {
        return b.length - a.length;
    });
    let baseRes = orderGroup[0];
    for (let i = 0; i < baseRes.length; i++) {
        let numRep = 0;
        for (let j = 0; j < orderGroup.length; j++) {
            if (orderGroup[j].includes(baseRes[i])) numRep++;
        }
        if (numRep == orderGroup.length) count++;

    }
});
console.log(count);