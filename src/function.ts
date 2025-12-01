//function parameter and return 

function calculateTotal(price = 10, quantity: number) {
  const total = price * quantity;
  if (total < 10) {
    return "no found"
  } else if (total > 100) {
    return {};
  }
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
console.log(add(9, 10));
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

type UserStatus = 'active' | 'inactive' | 'pending';
interface User {
  id: number;
  name: string;
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

//extends - allow only particular type to get executed and restrict other 
function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

printName({ name: "ME", age: 21 });   // works
//printName({ age: 21 });   // ERROR, no name property

//default generics
//when no type is passed the generics will take this default values 
function wrap<T = number>(x: T): T {
  return x;
}

// No generic provided → uses default "number"
console.log(wrap(10));       // number

// Generic provided → overrides default
console.log(wrap<string>("Hi"));   // string

//keyof generics 
//give all the keys of the object
function printKey<T, K extends keyof T>(obj: T, key: K) {
  console.log(obj[key]);
}

const user = { name: "Srushti", age: 21 };

printKey(user, "name");  // OK
printKey(user, "age");   // OK
//printKey(user, "roll");  // ERROR (not a key)

//generic inference
//guess the type of automatically

function wrapping<T>(value: T): T {
  return value;
}

console.log(typeof (wrapping(10)));        // T = number
console.log(typeof (wrapping("hello")));   // T = string
// 1) Default generic type → valueType = string if not provided
function updateField<T, K extends keyof T, valueType = T[K]>(
  obj: T,
  key: K,
  value: valueType // 3) Generic inference works here
): T {
  obj[key] = value as T[K];
  return obj;
}

// Example object
const users = {
  name: "Srushti",
  age: 21
};

// USING THE FUNCTION

// 2) keyof with generics only "name" and "age" allowed
console.log(updateField(users, "name", "Amin"));   // valueType inferred as string
console.log(updateField(users, "age", 22));        // valueType inferred as number

// Error: "roll" is not a valid key
// updateField(user, "roll", 10);

//utility types
//partial

interface UserProfile {
  name: string;
  age: number;
  city: string;
}

function updateProfile(user: UserProfile, updates: Partial<UserProfile>) {
  return { ...user, ...updates };
}

const user1 = {
  name: "Srushti",
  age: 21,
  city: "Ahmedabad"
};

const updatedUser = updateProfile(user1, { city: "Mumbai" });

console.log("Original:", user1);
console.log("Updated:", updatedUser);

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
console.log(obj);

//const obj2: Required<Props> = { a: 5 };

//readonly

interface Todo {
  title: string;
}

// const todos: Readonly<Todo> = {
//   title: "Delete inactive users",
// };

//todos.title = "Hello";

//record <keys,type>
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cat_info: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

console.log(cat_info.boris);

//Pick<type,keys>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo_info: TodoPreview = {
  title: "Clean room",
  completed: false,
};

console.log(todo_info);
//omit<type,keys>
interface UserBasic {
  name: string;
  age: number;
  email: string;
  password: string;
}

type SafeUser = Omit<UserBasic, "password">;

const safe: SafeUser = {
  name: "Amin",
  age: 25,
  email: "amin@example.com"
};

console.log(safe);
//exclude<type,key>
type Status = "pending" | "approved" | "rejected";

type ActiveStatus = Exclude<Status, "rejected">;

const s: ActiveStatus = "approved";
// const s2: ActiveStatus = "rejected"; //  Error

console.log(s);
//extract<type,keys>
type A = "a" | "b" | "c";
type B = "b" | "x";

type Common = Extract<A, B>;

const c: Common = "b";

console.log(c);
//non-nullable
type MaybeString = string | null | undefined;

type SafeString = NonNullable<MaybeString>;

const s1: SafeString = "Hello";
// const s2: SafeString = null; //  Error

console.log(s1);

//parameter<t>
//construct a tuple type from the types used in the parameter of a function type 
function login(username: string, password: string) {
  return true;
}

type LoginParams = Parameters<typeof login>;

const params: LoginParams = ["srushti", "12345"];

console.log(params);

//return type
//get function return type 
function calculate(a: number, b: number) {
  return a + b;
}

type Result = ReturnType<typeof calculate>;

const output: Result = 50;

console.log(output);

//instance type
//get class instance

class Person {
  constructor(public name: string) { }
}

type PersonInstance = InstanceType<typeof Person>;

const p: PersonInstance = new Person("Srushti");

console.log(p);

//awaited
//just like async await in javascript to handle promises 
async function fetchUser() {
  const response = await fetch("https://example.com/user");
  return response.json();
}

// Get the final resolved type
type UserType = Awaited<ReturnType<typeof fetchUser>>;

// Use the type
const userBasic: UserType = {
  name: "Srushti",
  age: 21
};

console.log(userBasic);

export { }

