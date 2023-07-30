interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transaction: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 456,
};

const transaction2: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 474,
};

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "Some User",
  balance: 100,
  isActive: true,
  transaction: [transaction1, transaction2],
};

// advance

interface Book {
  name: string;
  price: number;
}

// interface EBook {
//   name: string;
//   price: number;
//   fileSize: number;
//   format: string;
// }

interface EBook extends Book {
  fileSize: number;
  format: string;
}

interface AudioBook extends EBook {
  // name: string;
  // price: number;
  // fileSize: number;
  // format: string;
  duration: number;
}

const book: EBook = {
  name: "some name",
  fileSize: 5,
  format: "pdf",
  price: 30,
};

// merging of two interfaces
// interface Food {
//   taste: string;
// }

// interface Food {
//   rating: number;
// }

// const rice: Food={

// }
