const fs = require('fs');
let bags = {}
fs.readFileSync('../input.txt', 'utf-8').split('\n').forEach(bag => {
    bags[bag.split(' contain ')[0]] = bag.split(' contain ')[1].replace('.', '');
});

function fathers(bagColor) {
    let fathers = [];
    Object.keys(bags).forEach(bag => {
        if (bags[bag].includes(bagColor)) {
            fathers.push(bag.split(' bag')[0]);
        }
    });
    return fathers;
}

finder = (bagColor) => {
    let root = fathers(bagColor);
    let childs = [];
    let count;
    do {
        count = 0;
        root = [...new Set(root.map(child => {
            let tempFathers = fathers(child);
            if (tempFathers.length > 0) {
                count++;
                childs.push(child);
                return tempFathers;
            } else {
                return child;
            }
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []))];
    } while (count != 0);
    console.log(root.length + [...new Set(childs)].length);
}

finder('shiny gold');