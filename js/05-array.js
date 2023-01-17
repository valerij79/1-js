console.clear();
/*
ARRAY (sąrašas, list'as, masyvas, matrica)
- rekomenduotina laikyti homogenišką informaciją
- galima ir skirtingų tipų informaciją laikyti sąraše
*/

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const chaos = [true, 7, 'asd', -3.14, 'ewreg', false, []];

console.log(empty);
console.log(marks);
console.log(names);
console.log(chaos);

const petroPazimys1 = 10;
const petroPazimys2 = 2;
const petroPazimys3 = 8;
const petroPazimys4 = 4;
const petroPazimys5 = 6;

const petroSuma = petroPazimys1 + petroPazimys2 + petroPazimys3 + petroPazimys4 + petroPazimys5;

const petroKiekis = 5;

const petroVidurkis = petroSuma / petroKiekis;
console.log('Petro pazimiu vidurkis:', petroVidurkis);

console.log('------------------');

//    index:  0, 1, 2, 3, 4, ....
const ona = [10, 2, 8, 4, 6];

const onosSuma = ona[0] + ona[1] + ona[2] + ona[3] + ona[4];
console.log(onosSuma);

const onosKiekis = ona.length;
console.log(onosKiekis);

const onosVidurkis = onosSuma / onosKiekis;
console.log('Onos pazimiu vidurkis:', onosVidurkis);

console.log('--------------');

// Reikia nupirkti: pomidoras, agurkas, svogunas, bulve.
const vegs = ['pomidoras', 'agurkas', 'svogunas', 'bulve'];

let sakinys = 'Reikia nupirkti: ';
let index = 0;

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += '.';

console.log(sakinys);

const sakinys2 = 'Reikia nupirkti: ' + vegs.join(', ') + '.';
console.log(sakinys2);

const sakinys3 = `Reikia nupirkti: ${vegs.join(', ')}.`;
console.log(sakinys3);

console.log('------------------');

//  0, 1, 2
// 10, 2, 8
const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);

const arTuri7 = jonas.includes(7);
console.log(arTuri7);

const arTuri2 = jonas.includes(2);
console.log(arTuri2);

const kelintas2 = jonas.indexOf(2);
console.log(kelintas2);

const kelintas10 = jonas.indexOf(10);
console.log(kelintas10);

const kelintas8 = jonas.indexOf(8);
console.log(kelintas8);

const kelintas7 = jonas.indexOf(7);
console.log(kelintas7);

const kelintas777 = jonas.indexOf(777);
console.log(kelintas777);

console.log('------Namu darbai------');

const z = 10;
console.log(z);

const x = 15;
console.log(x);

const v = 20;
console.log(v);

console.log('------------------');

const pirmas = 'HTML';
console.log(pirmas);

const antras = 'CSS';
console.log(antras);

const trecias = 'Java_script';
console.log(trecias);

console.log('------------------');

const B = [11, 55, 99, 88, 77];
console.log(B);
const N = [4, 8, 9, 6, 3];
console.log(N);
const M = [555, 777, 888, 999, 99];
console.log(M);

console.log('------------------');

const fruits = ['obuolys', 'kriause', 'kiwi', 'vynuoges', 'mango'];
console.log(fruits);
const batai = ['kroksai', 'kedai', 'kerzai', 'aukstakulniai', 'botai'];
console.log(batai);
const vanduo = ['tyras', 'gazuotas', 'techninis', 'distiliuotas', 'jonizuotas'];
console.log(vanduo);

console.log('------------------');

const BSuma = B[0] + B[1] + B[2] + B[3] + B[4];
console.log(BSuma);
const NSuma = N[0] + N[1] + N[2] + N[3] + N[4];
console.log(NSuma);
const MSuma = M[0] + M[1] + M[2] + M[3] + M[4];
console.log(MSuma);

console.log('------------------');

const fruits2 = `${fruits.join(' ')}`;
console.log(fruits2);

const batai2 = `${batai.join(' ')}`;
console.log(batai2);

const vanduo2 = `${vanduo.join(' ')}`;
console.log(vanduo2);

console.log('------------------');

const BVerte = B[0] - B[1] + B[2] - B[3] + B[4];
console.log(BVerte);
const NVerte = N[0] - N[1] + N[2] - N[3] + N[4];
console.log(NVerte);
const MVerte = M[0] - M[1] + M[2] - M[3] + M[4];
console.log(MVerte);

console.log('------------------');

fruits.reverse();
const fruits3 = `${fruits.join(', ')}`;
console.log(fruits3);

batai.reverse();
const batai3 = `${batai.join(', ')}`;
console.log(batai3);

vanduo.reverse();
const vanduo3 = `${vanduo.join(', ')}`;
console.log(vanduo3);

console.log('------------------');

if (10 < 15) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (15 > 20) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (20 === 15) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (20 !== 15) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (20 <= 15) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (20 >= 15) {
    console.log('tiesa');
} else {
    console.log('melas');
}

console.log('------------------');

console.log(pirmas.length);
console.log(antras.length);
console.log(trecias.length);

if (pirmas > antras) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (antras < trecias) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (pirmas === antras) {
    console.log('lygus');
} else {
    console.log('nelygus');
}

if (antras !== trecias) {
    console.log('nelygus');
} else {
    console.log('lygus');
}

if (pirmas >= antras) {
    console.log('didesnis arba lygus');
} else {
    console.log('mazesnis');
}

if (pirmas <= antras) {
    console.log('mazesnis arba lygus');
} else {
    console.log('didesnis');
}

console.log('------------------');

console.log(fruits.length);
console.log(batai.length);
console.log(vanduo.length);

if (fruits > batai) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (vanduo < batai) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (vanduo === fruits) {
    console.log('lygus');
} else {
    console.log('nelygus');
}

if (batai !== vanduo) {
    console.log('nelygus');
} else {
    console.log('lygus');
}

if (fruits >= vanduo) {
    console.log('didesnis arba lygus');
} else {
    console.log('mazesnis');
}

if (vanduo <= batai) {
    console.log('mazesnis arba lygus');
} else {
    console.log('didesnis');
}
