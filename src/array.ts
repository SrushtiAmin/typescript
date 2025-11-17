let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b", "c"];
console.log(numbers);
console.log(names);

// //readonly
// let nums: readonly number[] = [1, 2, 3];

// nums.push(4); //  cannot modify

// let nums = [1, 2];
// nums.push(3); 
// // nums = [1, 2, 3]
// //pop
// let last = nums.pop();
// //shift
// let first = nums.shift();
// console.log(nums);
// console.log(last);
// console.log(first);

// let nums = [20, 30];
// nums.unshift(10);


// console.log(nums)
//map
//Transforms each element and returns a new array.
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);

console.log(nums);
console.log(doubled);

//filter
//Returns items that satisfy a condition.
let nums1 = [1, 2, 3, 4];
let even = nums1.filter(n => n % 2 === 0);

console.log(nums1);

console.log(even);

//for each iterate through loop 
let num = [1, 2, 3];
num.forEach(n => console.log(n));
console.log(num);

//short program 
let students: string[] = ["John", "Amin", "Srushti"];

students.push("Aryan");
students.pop();

let selected = students.filter(name => name.startsWith("S"));
let upper = students.map(name => name.toUpperCase());
console.log(students);
console.log(selected);
console.log(upper);
//union - can use more than one datatype together 
let score: string | number;

score = 44;
score = "55";

type User_info = { name_Info: string };
type Admin = { name: string; role: string };

let person1: User_info | Admin;

person1 = { name_Info: "Srushti" };            // OK
person1 = { name: "Amin", role: "admin" };     // OK
   


function processValue(v: number | string) {
  if (typeof v === "number") {
    console.log(v.toFixed(2)); // Works
  } else {
    console.log(v.toUpperCase()); // Works
  }
}
let items: (number | string)[];
items = [1, "hello", 3, "world"];
console.log(items);

//intersect

type HasId = { id: number };
type Timestamped = { createdAt: Date };

type Entity = HasId & Timestamped; // must have both

const e: Entity = { id: 1, createdAt: new Date() };
console.log(e);

//type aliases give custom name to datatype 
type User = {
  name: string;
  age: number;
};

let u1: User = { name: "Amin", age: 21 };
console.log(u1);

//keyof-to access all valid keys 
//takes and object and return it key types 
//list of keys of types
//cant access keyof directly or print it ty
const user1 = {
  name: "Amin",
  age: 21
} as const;

type UserKeys = keyof typeof user1;

console.log(Object.keys(user1));
//typeof - it works on value/variables
type AgeType = typeof age;
let age = 21;

console.log(typeof age);
let name = "Srushti";

console.log(typeof name);
let isStudent = true;

console.log(typeof isStudent);
let user = {
  name: "Amin",
  age: 21
};

console.log(typeof user);
//index signature - when u don't know exact property name in advance
//allow to have dynamic and unknown types

type Scores = {
  [key: string]: number;
};
//example
const marks: Scores = {
  math: 95,
  english: 88,
  science: 90,
};
//key name does not matter but it know types of values given to keys 


//indexed types 
//when you extract the types of a specific key from a type 
type User2 = {
  name: string;
  age: number;
};

const user2: User2 = {
  name: "Amin",
  age: 21,
};

console.log(user2["name"]); // Prints: Amin
console.log(user2["age"]);  // Prints: 21

function printValue<T, K extends keyof T>(obj: T, key: K) {
  console.log(obj[key]);
}

printValue(user2, "name");  // Amin
printValue(user2, "age");   // 21

//both 
//convert real variable to types and extract all keys of that types

const user3 = {
  name: "Amin",
  age: 21
};

// typeof → get type of user
type UserType = typeof user3;

// keyof → get keys of user
type User_Keys = keyof UserType;   // "name" | "age"

// Lookup type → get type of specific property
type NameType = UserType["name"]; // string

export{}