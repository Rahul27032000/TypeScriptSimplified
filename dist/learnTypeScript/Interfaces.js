"use strict";
const transaction1 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456,
};
const transaction2 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 474,
};
const bankAccount = {
    accountNumber: 123,
    accountHolder: "Some User",
    balance: 100,
    isActive: true,
    transaction: [transaction1, transaction2],
};
const book = {
    name: "some name",
    fileSize: 5,
    format: "pdf",
    price: 30,
};
//# sourceMappingURL=Interfaces.js.map