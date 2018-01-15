//const keyboard = [ qwertyuiop[], asdfghjkl;'\, \zxcvbnm,./ ];

//
//const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabet = "qwertyuiop[]asdfghjkl;'\\zxcvbnm,./";

//let a = alphabet.substr(0,alphabet.indexOf('a'));
//let b = alphabet.substr(alphabet.indexOf('a'), alphabet.indexOf('z') - alphabet.indexOf('a'));
//let c =  alphabet.substr(alphabet.indexOf('z'));

const a = alphabet.slice(0, 12);
const b = alphabet.slice(12, 22);
const c = alphabet.slice(22, 32);
let arr = [a, b, c];
console.log(arr);

console.log(b[5] + a[2] + b[8] + b[8] + a[8]);
console.log(b[6] + b[0] + c[5] + b[0] + b[1] + c[4] + a[3] + a[7] + a[9] + a[4]);
console.log(a[4] + a[3] + b[0] + a[7] + c[7] + a[2] + a[3]);














