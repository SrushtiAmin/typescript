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
//generics function and classes 
//generics is to create reusable function and classes that can work with any types while keeping type safety 
//placeholder for types
//T is placeholder that take type according to the value given to it 
function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}


console.log(getFirst([1, 2, 3]));         // 1
console.log(getFirst(["a", "b", "c"]));   // a
//when we want to sue any type of array to be written not specifically bind to any one datatype 
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

console.log(swap(1, 2));         // [2, 1]
console.log(swap("hi", "bye"));  // ["bye", "hi"]

//class
class StorageBox<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

const numberBox = new StorageBox(100);
console.log(numberBox.getItem()); // 100

const stringBox = new StorageBox("Srushti");
console.log(stringBox.getItem()); // "Srushti"
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T) {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }
}

const queue = new Queue<string>();
queue.enqueue("Srushti");
queue.enqueue("Amin");
console.log(queue.dequeue()); // Srushti

export{}
