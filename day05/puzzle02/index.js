const fs = require('fs');
let flight = fs.readFileSync('../input.txt', 'utf-8').split('\n').map((seat) => {
    let rows = seat.substring(0, 7).split('');
    let cols = seat.substring(7).split('');
    let row = 0;
    let col = 0;
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
    return [row, col];
}).sort();

for (let i = 0; i < flight.length - 1; i++) {
    if (flight[i][1] + 2 == flight[i + 1][1]) {
        console.log(flight[i][0] * 8 + ((flight[i + 1][1] + flight[i][1]) / 2));
    }
}

