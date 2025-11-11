require('module-alias/register');
// import { JSDOM } from 'jsdom';
// const { window } = new JSDOM(`<!DOCTYPE html><p>Hello</p>`);
// global.document = window.document;


function greet(name: string) {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript"));

let firstname :string ="Srushti";
let title: string = "Web Developer";
let intro: string =`Hi! I'm ${firstname} and I'm ${title}`;

console.log(firstname);
console.log(title);
console.log(intro);

let result = 3n / 2n;
console.log(result);

// console.log(1n == 1); 

// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(notPending); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result1 = completed && hasError; 
console.log(result1); // false

// OR operator
let result2 = completed || hasError; 
console.log(result2); // true

// document.addEventListener('click', function (event) {
//     console.log(event.button); 
// });