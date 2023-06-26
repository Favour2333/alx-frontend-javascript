export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const string = "Hello";
console.log(concatArrays(array1, array2, string)); // Output: [1, 2, 3, 4, 5, 6, "H", "e", "l", "l", "o"]
