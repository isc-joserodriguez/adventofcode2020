const fs = require('fs');
let acc = 0;
const instructions = fs.readFileSync('../input.txt', 'utf-8').split('\n');

const findLoop = () => {
    let pos = 0;
    let nextPos = 0;
    let posArray = [0];
    while (true) {
        nextPos = execute(instructions[pos], pos);
        if (posArray.includes(nextPos)) {
            console.log(acc);
            return
        } else {
            posArray.push(nextPos)
            pos = nextPos;
        }
    }
}

const execute = (instruccion, iterator) => {
    let [option, val] = instruccion.split(' ');
    switch (option) {
        case 'acc':
            acc += parseInt(val);
            break;
        case 'jmp':
            return iterator + parseInt(val);
        case 'nop':
            break;
        default:
            break;
    }
    return iterator + 1;

}

findLoop();