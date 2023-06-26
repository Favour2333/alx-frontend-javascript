export default function returnHowManyArguments(...args) {
  return args.length;
}
console.log(returnHowManyArguments("Hello", "Holberton", 2020)); // Output: 3
console.log(returnHowManyArguments(1, 2, 3, 4, 5)); // Output: 5
console.log(returnHowManyArguments()); // Output: 0 (no arguments passed)

