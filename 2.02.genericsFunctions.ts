/*

GENERIC FUNCTIONS

A function that works on any type of data

*/

function first<T>(elements: Array<T>): T {
  return elements[0];
}
first<boolean>([true, false]);



// arrow function example
const firstArrow = <T>(elements: Array<T>): T => {
  return elements[elements.length-1]
}





function last<T>(elements: Array<T>): T {
  return elements[elements.length - 1];
}
let results: [string, number] = [
  last<string>(['a', 'b', 'c']),
  last<number>([1, 2, 3]),
];

// Q: what would console.log(results) print?
