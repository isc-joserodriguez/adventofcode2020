const fs = require('fs');
count = 0;
fs.readFileSync('../input.txt', 'utf-8').split('\n\n').forEach((group, i) => {
    count = count + [...new Set(group.replace(/\n/g, '').split(''))].length;
});
console.log(count);