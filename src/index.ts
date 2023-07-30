// let sales: number = 12_452_457;
// let course: string = "Some random course";
// let is_published: boolean = false;
// let level; //--> variable type any (avoid this type as much as possible)

// // type any
// function render(document: any) {
//   console.log(document);
// }

// // type array
// let numbers: number[] = [1, 2, 3];
// // the main advantage of using typescript is editor know the type and it can give autocomplete suggestions
// numbers.forEach((n) => n.toFixed);

// // tuple type --> fix length array
// let user: [number, string] = [12, "name"];
// // loop hole
// user.push(12);

// // enums type -->
// //            representation of type of something as constant
// //            representation of list of constant

// // pascal naming convention
// const enum Size {
//   Small = 5,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Large;

// console.log(mySize);

// // functions

// function calculateTax(income: number, taxYear = 2021): number {
//   // let x; -->> unused local
//   if (taxYear < 2022) {
//     return income * 1.2;
//   }
//   return income * 5;
// }

// // void --> a function who doesn't return any value
// calculateTax(10_000, 2025);
