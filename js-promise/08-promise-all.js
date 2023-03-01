const p1 = new Promise((resolve) => setTimeout(resolve, 100, 1));
const p2 = new Promise((resolve) => setTimeout(resolve, 300, 2));
const p3 = new Promise((resolve) => setTimeout(resolve, 500, 6));

const promises = [p1, p2, p3];

// output: 9
Promise.all(promises).then((data) => {
    console.log(data.reduce((total, next) => total + next))
});

console.log('finished');