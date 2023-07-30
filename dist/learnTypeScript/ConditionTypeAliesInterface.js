"use strict";
function printId(id) {
    if (typeof id === "string")
        console.log(id.toUpperCase());
    else {
        console.log(id.toFixed());
    }
}
printId(1);
printId("fg");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("sdfgawet43"));
console.log(getFirstThree([1, 2, 3, 4, 5]));
//# sourceMappingURL=ConditionTypeAliesInterface.js.map