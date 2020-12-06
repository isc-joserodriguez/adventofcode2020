const fs = require('fs');
let maxID = 0;
fs.readFileSync('../input.txt', 'utf-8').split('\n').forEach((seat) => {
    let rows = seat.substring(0, 7).split('');
    let cols = seat.substring(7).split('');
    let row = 0;
    let col = 0;
    let ID = 0;
    for (let i = 0, min = 0, max = 127; i < rows.length; i++) {
        if (rows[i] == 'F') {
            row = max = Math.floor((max + min) / 2);
        } else {
            row = min = Math.ceil((max + min) / 2);
        }
    }
    for (let i = 0, min = 0, max = 7; i < cols.length; i++) {
        if (cols[i] == 'L') {
            col = max = Math.floor((max + min) / 2);

        } else {
            col = min = Math.ceil((max + min) / 2);

        }
    }
    ID = row * 8 + col;
    maxID = (maxID < ID) ? ID : maxID;



});

console.log(maxID);