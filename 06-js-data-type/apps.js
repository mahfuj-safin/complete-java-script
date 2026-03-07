// JavaScript DataType

// String
/*
 * single quotetion ba double quotetion er moddhe ja kisu lekha hoy seigula k string bole
 */
let firstName = 'Safin';
// let fullName = 'Mahfujur Rahman \'Sain\'';
let fullName = 'Mahfujur Rahman "Sain"';

// string er vitore variable dite chaile
let finalName = `Mahfujur Rahman ${firstName}`;

console.log(fullName);
console.log(firstName);
console.log(finalName);

/*
 * NUMBER
 */
// je kono type er songkha ke number bola hoy
let firstAge = 20;
let firstAge2 = 15;
let finalAge1 = firstAge + firstAge2;

// javaScript a jodi number er pore string use kora hoy tahole full lekha ta javaScript string hisabe grohon kore ney
let age = 30;
let age2 = 20;
let finalAge = age + age2 + firstName; // full line akhn string hoye geche

console.log(finalAge1);
console.log(finalAge);

/*
 * BIGINT
 */

// boro songkha niye kaj korte gele songkhar sese (n) dite hoy tahole etar calculation sothik vabe hobe, eta akta bigint number, mind it bigint number er sathe normal number er jog biyog gun vag kora jay na
let bigNumber = 99999999999999999n;
let bigNumber2 = 99999999999999999n;

console.log(bigNumber * bigNumber2);
console.log(typeof bigNumber);

/*
 * BOOLEAN
 */

let ifAdult = true;

console.log(ifAdult);
console.log(typeof ifAdult);

/*
 * Undefine
 */
let someInfo;
console.log(someInfo);
console.log(typeof someInfo);

/*
 * Null
 */
let someInfo1 = null;
console.log(someInfo1);
console.log(typeof someInfo1);

/*
 * Array
 */

let fruits = ['Apple', 'Lemon', 'Orange'];
console.log(fruits);
console.log(typeof fruits);

/*
 * Object
 */
let student = {
  fullName: 'Mahfujur Rahman',
  Age: 20,
  dateOfBirth: 2006,
};
console.log(student);
console.log(typeof student);
