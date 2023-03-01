async function doWork(){
    // wait for a Promise
    let res = await promise;
    console.log(res);
}

let promise = new Promise(resolve => {
    setTimeout(() => resolve(23), 2000);
});

doWork();
console.log('next code')
/*
output:
next code
23
*/