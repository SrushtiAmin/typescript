//function parameter and return 

function calculateTotal(price: number, quantity: number): number {
  const total = price * quantity;
  return total;
}

let result = calculateTotal(100, 2);
//function declaration and hoisting 
//function declaration can be hoisted if it has been defined anywhere in program 

sayHi(); // works

function sayHi() {
  console.log("Hi");
}

//argument hoisting cant be done 
//storing it in variable take different memory that the reason it cant be hoisted 
///it will throw error
// greet("Srushti");
// const greet = function (name: string) {
//   console.log("Hello, " + name);
// };

//arrow function 
//shorter way to define function
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(9,10));
//default parameters
//when there is no user given value it will take default one
function calculatePrice(amount: number, tax: number = 18) {
  return amount + (amount * tax) / 100;
}

console.log(calculatePrice(1000)); // 1180 (default 18%)
console.log(calculatePrice(1000, 10)); // 1100 (custom tax)
//rest parameter 
//we don't have to define datatypes for each value rather then use rest parameter to tell that this all will take same type of datatype

function joinNames(...names: string[]) {
  return names.join(", ");
}

console.log(joinNames("Srushti", "Amin", "VGEC"));

//higher order function 

function operateOnNumbers(numbers: number[], operation: (num: number) => number): number[] {
  return numbers.map(operation);
}

const double = (n: number) => n * 2;
const squared = (n: number) => n * n;

const myNumbers = [1, 2, 3, 4];

const doubledNumbers = operateOnNumbers(myNumbers, double); 
const squaredNumbers = operateOnNumbers(myNumbers, squared); 
//this means considering the particular object to be called 

const student_info = {
  name: "Srushti",
  showName() {
    console.log(this.name);
  }
};

student_info.showName(); // "Srushti"
//with arrow function 

// const info = {
//   name: "Srushti",
//   showName: () => {
//     console.log(this.name);
//   }
// }

// info.showName();  // undefined
//contextual this 
let person_info = {
  name: "Amin",
  greet() {
    console.log("Hi " + this.name);
  }
}

//interface+type aliases

interface User {
  id: number;
  name: string;
  email?: string; // optional property
  readonly createdAt: Date;
  [key: string]: any; // index signature (optional)
}

