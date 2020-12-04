const fs = require('fs');

let trees = 0;
let steps = 0;

let pathArray = fs.readFileSync('../input.txt', 'utf-8').split('\n');
for (let index = 0; index < pathArray.length - 1; index++) {
    let maxSteps = pathArray[index].length - 1;
    steps = steps + 3;
    if (steps > maxSteps) {
        steps = steps - (maxSteps + 1);
    }
    if ((pathArray[index + 1])[steps] == '#') {
        trees++;
    }
}

console.log(trees);