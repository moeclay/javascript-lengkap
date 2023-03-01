/**
 * "Spread Operator" yang digunakan untuk memecah sebuah array 
 * menjadi elemen-elemen individualnya.
 */
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2, 7, 8];
console.log(arr3);

/*
output:
[
  1, 2, 3, 4,
  5, 6, 7, 8 
]
*/