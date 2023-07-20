function calculateSum(num1: number, num2: number): number {
  return num1 + num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function reverseString(str: string): string {
  const letters = str.split("");
  return letters.reduce((rev, strRev) => strRev + rev, "");
}

const calculateAverage = (nums: number[]): number => {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
};

type MathOperation = (num1: number, num2: number) => number;

const multiply: MathOperation = (num1: number, num2: number): number =>
  num1 * num2;

console.group("calculateSum");
console.log(calculateSum(5, 4));
console.log(calculateSum(2, 14));
console.log(calculateSum(2, -9));
console.groupEnd();

console.group("isEven");
console.log(isEven(0));
console.log(isEven(5));
console.log(isEven(18));
console.log(isEven(-4));
console.groupEnd();

console.group("reverseString");
console.log(reverseString("Femsa"));
console.log(reverseString("Digital"));
console.log(reverseString("IronHack"));
console.groupEnd();

console.group("calculateAverage");
console.log(calculateAverage([2, 3, 3, 5, 7, 10]));
console.log(calculateAverage([15, 33, 28]));
console.log(calculateAverage([17, 42, 13, 9]));
console.groupEnd();

console.group("multiply");
console.log(multiply(2, 10));
console.log(multiply(14, 3));
console.log(multiply(66, 4));
console.groupEnd();
