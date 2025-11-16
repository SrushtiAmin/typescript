var _a;
var _b;
require('module-alias/register');
// import { JSDOM } from 'jsdom';
// const { window } = new JSDOM(`<!DOCTYPE html><p>Hello</p>`);
// global.document = window.document;
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("TypeScript"));
var firstname = "Srushti";
var title = "Web Developer";
var intro = "Hi! I'm ".concat(firstname, " and I'm ").concat(title);
console.log(firstname);
console.log(title);
console.log(intro);
var result = 3n / 2n;
console.log(result);
// console.log(1n == 1); 
// NOT operator
var pending = true;
var notPending = !pending; // false
console.log(notPending); // false
var hasError = false;
var completed = true;
// AND operator
var result1 = completed && hasError;
console.log(result1); // false
// OR operator
var result2 = completed || hasError;
console.log(result2); // true
// document.addEventListener('click', function (event) {
//     console.log(event.button); 
// });
var statuses = {
    OPEN: "open",
    CLOSED: "closed",
    PENDING: "pending"
};
var status1 = Symbol("status");
var order = (_a = {},
    _a[status1] = statuses.OPEN,
    _a);
console.log(order[status1]); // "open"
console.log(Object.keys(statuses));
console.log(Object.getOwnPropertyNames(statuses));
console.log(Object.getOwnPropertySymbols(statuses));
//undefined
var counter = 0;
console.log(counter);
//as an object 
var counter1 = {
    current: 0
};
var max = (_b = counter1.max) !== null && _b !== void 0 ? _b : 100;
if ('max' in counter1) {
    console.log(counter1.max);
}
else {
    console.log("max not found, default =", max);
}
//union - allow more than one data type together 


