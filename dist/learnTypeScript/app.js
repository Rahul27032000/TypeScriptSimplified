"use strict";
function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate(1, 3));
function getTotal(numbers) {
    return numbers.reduce((acc, item) => {
        return acc + item;
    });
}
console.log(getTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
//# sourceMappingURL=app.js.map