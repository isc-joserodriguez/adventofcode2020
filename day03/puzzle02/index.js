const fs = require('fs');
const pathArray = fs.readFileSync('../input.txt', 'utf-8').split('\n');

const trees = (right, down) => {
    let trees = 0;
    let steps = 0;
    for (let index = 1; index * down < pathArray.length; index++) {
        let maxSteps = pathArray[index].length;
        steps = steps + right;
        if (steps >= maxSteps) {
            steps = steps - maxSteps;
        }
        if ((pathArray[index * down])[steps] == '#') {
            trees++;
        }
    }
    return trees;
}

console.log(trees(1, 1) *
        trees(3, 1) *
        trees(5, 1) *
        trees(7, 1) *
        trees(1, 2));