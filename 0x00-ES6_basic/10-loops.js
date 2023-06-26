export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];

  for (const value of array) {
    updatedArray.push(appendString + value);
  }

  return updatedArray;
}
const myArray = ['apple', 'banana', 'orange'];
console.log(appendToEachArrayValue(myArray, 'fruit-'));
