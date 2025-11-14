require('module-alias/register');
// import { JSDOM } from 'jsdom';
// const { window } = new JSDOM(`<!DOCTYPE html><p>Hello</p>`);
// global.document = window.document;

//small function
function greet(name: string) {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript"));
//string
let firstname :string ="Srushti";
let title: string = "Web Developer";
let intro: string =`Hi! I'm ${firstname} and I'm ${title}`;

console.log(firstname);
console.log(title);
console.log(intro);
//bigint
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

const statuses = {
  OPEN: "open",
  CLOSED: "closed",
  PENDING: "pending"
};
//symbol
const status1 = Symbol("status");

const order = {
  [status1]: statuses.OPEN,
};

console.log(order[status1]); // "open"
console.log(Object.keys(statuses)); 
console.log(Object.getOwnPropertyNames(statuses)); 
console.log(Object.getOwnPropertySymbols(statuses)); 

//undefined

let counter =0;
console.log(counter);

//as an object 
// let counter1 = {
//    current: 0
// };

// const max = counter1.max ?? 100;

// if('max' in counter1) {
//     console.log(counter1.max);
// }else {
//     console.log("max not found, default =", max);
// }

// //function parameter
//string method
const name1 = firstname.toUpperCase();
console.log(name1);

//function
//any
let hero;

function getHero(){
  return "thor"
}
hero = getHero()

//example
// function add(a,b){
//   return a+b;
// }

// with type annotation 
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));
//returning more than 1 type 

// function myValue(getValue :number): boolean{
//   if(getValue > 5){
//     return true
//   }
//   return "200 OK"
// }

//map

const heros = ["thor","ironman","hulk"];

heros.map((hero):string =>{
  return `hero is ${hero}`
})

// function consoleError(errmsg: string):void{
//   console.log(errmsg);
// }

// function handleError(errmsg: string):never{
//   throw new Error(errmsg);
// }

//never use case 

type Shape = "circle" | "square";

function getArea(shape: Shape) {
  if (shape === "circle") {
    return Math.PI * 2;
  } else if (shape === "square") {
    return 4;
  } else {
    // This should never happen
    const check: never = shape; //Error if a new type is added later
  }
}
console.log(getArea("circle"));
console.log(getArea("square"));



//symbol
const ID = Symbol("id");
let user = {
  [ID]: 101,
  name: "Srushti"
};
console.log(user[ID]); // 101
//comaprison 
const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2); // false
//symbol as an object 
const ID1 = Symbol("id");

const user1 = {
  name: "Srushti",
  [ID1]: 101
};

console.log(user.name); // "Srushti"
console.log(user[ID]);  // 101
