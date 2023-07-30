// cannot do merging in type aliases

// type Student = {
//   name: string;
//   standard: number;
// };

// type Student = {
//   Subject: string;
// };

type SanitizeString = string;
type EvenNumber = number;

// union types

type ID = number | string;

function printId(id: ID) {
  if (typeof id === "string") console.log(id.toUpperCase());
  else {
    console.log(id.toFixed());
  }
}

printId(1);
printId("fg");

function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}

console.log(getFirstThree("sdfgawet43"));
console.log(getFirstThree([1, 2, 3, 4, 5]));
