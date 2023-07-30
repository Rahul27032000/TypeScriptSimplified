function calculate(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calculate(1, 3));

// reduce function using typescript
function getTotal(numbers: number[]): number {
  return numbers.reduce((acc, item) => {
    return acc + item;
  });
}

console.log(getTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
