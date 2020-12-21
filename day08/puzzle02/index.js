const fs = require('fs');
let possiblesChanges = [], newInstructions = [];
let pos, acc, stack;
const originalInstructions = fs.readFileSync('/home/shepe/Documentos/adventofcode2020/day08/input.txt', 'utf-8').split('\n');
originalInstructions.forEach((instruction, index) => {
    let option = instruction.split(' ')[0];
    if (option == "nop" || option == "jmp") possiblesChanges.push(index);
});
const findLoop = () => {
    let nextPos = 0;
    reload();
    while (true) {
        nextPos = execute(newInstructions[pos], pos);
        if (stack.includes(nextPos)) {
            reload();
        } else if (nextPos >= originalInstructions.length) {
            console.log(acc);
            return
        } else {
            stack.push(nextPos)
            pos = nextPos;
        }
    }
}

const execute = (instruction, iterator) => {
    let [option, val] = instruction.split(' ');
    switch (option) {
        case 'acc':
            acc += parseInt(val);
            break;
        case 'jmp':
            return iterator + parseInt(val);
        case 'nop':
            break;
    }
    return iterator + 1;
}

const reload = () => {
    let change = possiblesChanges.pop();
    newInstructions = [...originalInstructions];
    let [option, val] = newInstructions[change].split(' ');
    newInstructions[change] = (option == "jmp" ? "nop" : "jmp") + " " + val;
    pos = 0;
    acc = 0;
    stack = [0];
}

findLoop(); 