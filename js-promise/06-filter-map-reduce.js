// versi 1
const numbers = [1, 2, 3, 4, 6];
const result = numbers.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(result); // [ 4, 8, 12 ]

// versi 2
const result2 = numbers.reduce((prev, curr) => {
  if (curr % 2 === 0) {
    prev.push(curr * 2);
  }
  return prev;
}, []);
console.log(result2); // [ 4, 8, 12 ]