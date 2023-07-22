// type aliases --> used for reuse type and simplifying code
// unions and intersections --> to combine types
// type narrowing
// nullable types
// the unknown types
// the never type

// type aliases --> follows DRY principle
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employees: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types

function kgToLbs(weight: number | string): number {
  // narrowing technique
  if (typeof weight === "number") {
    return weight * 2.2;
  } else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("dfg");

// intersection type

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal type (exact, specific)
type Quantity = 50 | 100;
type Metrics = "cm" | "inch";
let quantity: Quantity = 50;

// nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase);
  else console.log("hello");
}

greet(null);
greet(undefined);

// optional chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// optional property access operator
console.log(customer?.birthday?.getFullYear());
