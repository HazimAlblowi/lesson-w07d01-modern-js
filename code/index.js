// my js code
'use strict';
console.log("It's Alive!!!");

// // Function Declaration
// function sayHello() {
//     console.log('Hello World!');
// }

// // Function Expression
// const sayHello = function() {
//     console.log('Hello World!');
// }

// // Arrow function expression
// const sayHello = () => {
//     console.log('Hello World!');
// }

// const sayHello = () => console.log('Hello World!');

// const greetWorld = (greeting) => console.log(`${greeting} World!`);

// const greetWorld = greeting => console.log(`${greeting} World!`);

// const greetWorld = greeting => `${greeting} World!`;

// console.log(greetWorld('Hi'));

// const add =  (x, y) =>  x + y;

// console.log(add(10,20));

// const addFive = num => 5 + num;

// const divide = (num1, num2) => num1 / num2;

// const whoIsTheBestIA = () => {
//     let iaName = 'Alanoud'
//     console.log(iaName);
// }

// whoIsTheBestIA();

// const instructors = ['Marc', 'Alanoud', 'Usman'];

// for ( let i = 0; i < instructors.length; i++ ){
//     console.log(instructors[i]);
// }

// instructors.forEach(function (element, index){
//     console.log(element, index);
// })

// instructors.forEach(element => console.log(element))

// const instructors = ['Marc', 'Alanoud', 'Usman'];
// const instructorsCopy = [];

// for (let i = 0; i < instructors.length; i++){
//     instructorsCopy.push(instructors[i]);
// }

// instructors.forEach(item => instructorsCopy.push(item))

// console.log(instructorsCopy);

// const friends = ["Mansour", "Munira", "Ahmed"];

// friends.forEach(friend => console.log(`Hi ${friend}!`));

const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

stringNumbers.forEach(num =>  Number(num)  < 4000 ? totalNumbersUnder4000 += Number(num) : "");

console.log(totalNumbersUnder4000);