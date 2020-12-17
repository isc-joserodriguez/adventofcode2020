const fs = require('fs');
let bags = {}
fs.readFileSync('/home/shepe/Documentos/adventofcode2020/day07/input.txt', 'utf-8').split('\n').forEach(bag => {
    bags[bag.split(' bags contain ')[0]] = bag.split(' contain ')[1].replace('.', '').split(',').map(element => {
        element = element.trim();
        let newContent = [];
        if (element == "no other bags") return [];
        for (let i = 0; i < parseInt(element[0]); i++) {
            newContent.push(element.substring(2).split(' bag')[0]);
        }
        return newContent;
    }).reduce((el, nxt) => {
        return el.concat(nxt);
    }, []);
});

function count(bagColor) {
    let rootBags = bags[bagColor];
    let count = bags[bagColor].length;
    while (rootBags.length != 0) {
        rootBags = rootBags.map(bag => {
            return bags[bag];
        }).reduce((el, nxt) => {
            return el.concat(nxt);
        }, []);
        count = count + rootBags.length;
    }
    console.log(count);
}
count("shiny gold");