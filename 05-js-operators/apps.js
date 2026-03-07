// java script operators

/*
 * arithmetic operator
 */

let a = 50;
let b = 20;
// let c = a + b;
// let c = a - b;
// let c = a * b;
// let c = a / b;
let c = a % b; // vagsesh
console.log(c);

/*
let userInput = prompt('Enter a number');
let number = parseInt(userInput);

if (number % 2 === 0) {
  console.log(`${number} is even number`);
} else {
  console.log(`${number} is odd number`);
}
*/

let x = 10;
x = x + 1;
x++; //increment, that's mean x er sathe 1 jog hobe
console.log(x);

// decrement
let y = 20;
y = y - 1;
y--; // decrement, that's mean y er sathe 1 biyog hobe
console.log(y);

/*
 * comparison operator
 */

let p = 10;
let q = 50;
console.log(p == q); // etar mane holo valur same holei hobe.
console.log(p === q); // etar mane holo value and type duitai same hote hobe, p holo string and q holo number tar jonno eta false dekhabe.

console.log(p != q); //(!=) etar mane hocche p er man ki q er theke osoman.
console.log(p !== q); // same but recomended
console.log(p > q); //gater than
console.log(p < q); // less than
console.log(p <= q); //less than equal to
console.log(p >= q); // gater than equal to

/*
 * logical operator
 */

// && AND operator
// || OR operator
// !(value) NOT operator

/*
 * Assignment operator
 */

let j = 10;
let k = 20;
j = j + k;
j += k;

j = j - k;
j -= k;

j = j * k;
j *= k;

j = j / k;
j /= k;
j **= k;

console.log(j);

/*
 * Conditional operator
 */
let t = a > b ? 'True' : 'False';
console.log(t);

let r = `10 + "5"`;
console.log(r);
