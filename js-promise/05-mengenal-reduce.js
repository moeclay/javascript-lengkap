/**
 * Reduce adalah salah satu method built-in dari objek Array 
 * pada JavaScript yang digunakan untuk melakukan perhitungan atau 
 * pemrosesan pada setiap elemen dari sebuah array. 
 * 
 * Reduce mengambil sebuah callback function (fungsi yang akan 
 * dijalankan untuk setiap elemen dalam array) dan 
 * sebuah nilai awal. 
 * 
 * Callback function tersebut mengambil dua parameter, 
 * yaitu "accumulator" (nilai yang dihasilkan 
 * oleh pemrosesan elemen sebelumnya) dan "currentValue" 
 * (elemen saat ini dalam array).
 */

// contoh sum
const numbers = [1,2,3,4,5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15

// contoh max
const max = numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
}, 0);
console.log(max); // 5

// contoh min
const min = numbers.reduce((accumulator, currentValue) => {
    return accumulator < currentValue ? accumulator : currentValue;
});
console.log(min); // 1

// contoh object dalam array
const mahasiswa = [
    { nama: 'ucup', nilai: 80 },
    { nama: 'budi', nilai: 90 },
    { nama: 'bambang', nilai: 75 },
];
const totalNilai = mahasiswa.reduce((before, after) => {
    return before + after.nilai;
}, 0); // set nilai awal 0
console.log(totalNilai); // 245

// menyisipkan ibject ke array
const usersMale = ['reza', 'ucup', 'udin'];
const refactUsersMale = usersMale.reduce((prev, user) => {
    return [
        ...prev,
        {
            name: user,
            gender: "male"
        }
    ];
}, []);
console.log(refactUsersMale);
/*
[
  { name: 'reza', gender: 'male' },
  { name: 'ucup', gender: 'male' },
  { name: 'udin', gender: 'male' }
]
*/