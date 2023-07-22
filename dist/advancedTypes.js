"use strict";
let employees = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("dfg");
//# sourceMappingURL=advancedTypes.js.map