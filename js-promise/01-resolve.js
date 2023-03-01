let promise = new Promise(resolve => {
    // mengembalikan nilai dengan resolve dalam 2 detik
    setTimeout(() => resolve(2), 2000);
});
promise.then(val => console.log(val));

console.log('finish code')

/*
output:
finish code
2
*/
