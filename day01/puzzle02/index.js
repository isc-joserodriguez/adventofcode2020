const fs = require('fs');

numberArray = fs.readFileSync('../input.txt', 'utf-8').split('\n').map((num) => {
    return parseInt(num);
});

numberArray.forEach((num1, i) => {
    numberArray.forEach((num2, j) => {
        numberArray.forEach((num3, k) => {
            if (i != j && j!=k && k!=i) {
                if (num1 + num2 + num3 == 2020) {
                    console.log(num1, num2, num3, `${num1}*${num2}*${num3}=${num1*num2*num3}`);
                }
            }
        });
    });
});