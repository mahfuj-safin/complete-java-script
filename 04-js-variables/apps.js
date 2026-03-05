// JavaScript variables
// JavaScript Variables
/*
 JavaScript variable names are case-sensitive

 Variable names cannot contain spaces.

 Variables cannot be the same as reserved keywords such as `if` or `const`.

 By convention, JavaScript variable names are written in camelCase.

 Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).

 You can not add number first

 _, $ is acceptable but - not accaptable
*/

/*
 * var variable
 * var diye variable nile atake re declare kora jay
 * var diye variable nile atake re assign kora jay
 * var akti global scope, that's mean bahirer kono kisu vitore access paoya and vitorer kisu bahire access paoya jay. atake bole global scope.
 * var is hosted,
 */
var a = 10;
var a = 20;
a = 'bangladesh';
{
  var blocked = '30';
  console.log(a);
}

console.log(blocked);

console.log(a);

let fruits = 'manngo';
console.log(`${fruits} is my fav, ${fruits} I like to eat`);

/*
 * let variable
 ! let can not re declare.
 * let ke re assign kora jabe. 
 ! let can not global scoped, it is blocked scoped
 * let is not hosted
 */
let b = 10;
b = 11;

console.log(b);

// console.log(first);
// let first = 'someOne';

/*



 * const variable
 ! const can not re declare. 
 ! const can not re assign. 
 * const can not global scoped, it is blocked scoped
 ! const is not hosted
 */
const c = 10;
console.log(c);

// const variable k direct change kora jay na, but ekhane value gula komano barano or in out kora jay

const person = {
  firstName: 'Mahfuj',
  age: 20,
};
person.country = 'Bangladesh';
person.age = 22;

console.log(person);
