// JavaScript Function
/*function myFunction() {
  console.log('Hello Fuction');
}
myFunction();
myFunction();*/

// function re declare
/*function myFunction(fullName) {
  console.log('Hello ' + fullName);
}
myFunction('Safin');
myFunction('Mahfuj');*/

// ek er odhik parameter deoya jay
function myFunction(fullName, age, dateOfBirth = 2005) {
  console.log(
    'Hello ' + fullName + ' I am ' + age + ' My date of birth ' + dateOfBirth,
  );
}
myFunction('Safin', 18, 2006);
myFunction('Mahfuj', 20);

function isSubscribe() {
  console.log('Subscribe');
}
document.getElementById('btn').addEventListener('click', isSubscribe);

// self invoked function
(function (message) {
  console.log('I am Safin', message);
})('hello');

// function k variable hisabe store kora jay

let maths = function (x, y) {
  return x * y; // function a return deoya mane javascript bujhe ney je akhane code sesh,return akta function er moddhe akbar ee kah korte pare
};
console.log(maths(3, 4));
console.log(maths(4, 4));

let numbers = [5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(sqNumbers);

// array function
/*let add = function (x, y) {
  return x + y;
};
console.log(add(5, 6));*/
let add = (x, y) => x + y; // array function

console.log(add(5, 6));

// nested function
function greet(firstName) {
  function sayHello() {
    alert('Hello' + firstName);
  }
  return sayHello();
}
greet('Safin');
