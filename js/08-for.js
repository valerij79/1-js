console.clear();
/*
FOR (ciklas)
for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}
*/

const marks = [10, 2, 8, 4, 6];

let sum = 0;
let index = 0;

sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];

console.log('Vidurkis:', sum / marks.length);

// Isspausdinti nuo 0 iki 5.
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Isspausdinti nuo 100 iki 104.
for (let k = 100; k <= 104; k++) {
    console.log(k);
}

// Isspausdinti nuo 1000 iki 995.
for (let j = 1000; j >= 995; j--) {
    console.log(j);
}

console.log('--------------');
const pazymiai = [2, 4, 6, 8, 10, 10, 8, 6, 4, 2];

let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    console.log(i, '-->', pazymiai[i]);
}

console.log('----------------');

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 2; i < numbers.length; i += 3) {
    console.log(i, '-->', numbers[i]);
}

console.log('----------------');

const abc = 'abcdefghijklmnopqrstuvwxyz';
let text = '';

for (let i = 0; i < abc.length; i += 5) {
    text += abc[i];
    console.log(i, abc[i], text);
}

console.log('----------------');

const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];

// Sveiki, mano vardas yra [vardas]!

for (let i = 0; i < students.length; i++) {
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}

console.clear();
console.log('-------Namu_darbai---------')
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// 0 … 4
// 0 … 100
// 574 … 815
// -50 … 50
// -70 … 30


// let sumoje = 0;
//     for (let c = 0; c < 0; c++) {
//         sumoje += c;
//         console.log(sumoje);
//     }

console.log('----------------')
    let sumoje = 0;
    for (let c = 0; c < 5; c++) {
        sumoje += c;
        console.log(sumoje);
    }
    console.log('----------------')

    let sumoje1 = 0;
    for (let c = 0; c < 101; c++) {
        sumoje1 += c;
        console.log(sumoje1);
    }
    console.log('----------------')

    let sumoje2 = 0;
    for (let c = 574; c < 816; c++) {
        sumoje2 += c;
        console.log(sumoje2);
    }
    console.log('----------------')

    let sumoje3 = 0;
    for (let c = -50; c < 51; c++) {
        sumoje3 += c;
        console.log(sumoje3);
    }
    console.log('----------------')

    let sumoje4 = 0;
    for (let c = -70; c < 31; c++) {
        sumoje4 += c;
        console.log(sumoje4);
    }

    console.log('----------------')
    
// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: pvz.: “abcdef” -> “fedcba”
console.clear();
const abc1 = 'abcdef';
let text1 = '';


// for (let i = 0; i < abc1.length; i += 1) {
//     text1 += abc1[i];
//     console.log(i, abc1[i], text1);
// }
// for (let i = abc1.length; i < 0; i -= 1) {
//     text1 -= abc1[i];
//     console.log(i, abc1[i], text1);
// }

// const text3 = abc1[5] + abc[4]+abc1[3] + abc[2]+abc1[1] + abc[0];
// console.log(text3);

console.log('----------------')
