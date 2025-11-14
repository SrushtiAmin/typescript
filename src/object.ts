function greetTo(person: { name: string; age: number }) {
  return "Hello " + person.name;
}console.log(greetTo({ name: "Srushti", age: 21 }));

//optional properties
type Person = {
  name: string;
  age?: number; // optional
};

const p1: Person = { name: "Srushti" }; //  OK
const p2: Person = { name: "Amin", age: 21 }; // OK
console.log(p1);
console.log(p2);

type User = {
  id: number;
  name: string;
}

//"3-3-3-3"
type T_My_Num=`${string}-${string}-${string}-${string}`;
const my_num:T_My_Num="3-3-3-3"

const user = { id: 1, name: "Srushti" } as User;
user.name = "Amin"; //  OK
// user.id = 2;  Error: Cannot assign to 'id' because it is a read-only property
console.log(user);
//storing data using object key value pair 
type User1 = {
  id: number;
  name: string;
  email: string;
  address?: { city: string; zip: number };
};

const user1: User1 = {
  id: 101,
  name: "Srushti Amin",
  email: "srushti@example.com",
  address: { city: "Ahmedabad", zip: 380015 },
};

console.log(user1);


//when we have to give value afterwards 
let scores: { [studentName: string]: number } = {};

console.log(scores["Amit"] = 90);
console.log(scores["Srushti"] = 95);

//numeric enum 
enum Role {
  User = 1,
  Admin,
  SuperAdmin
}

console.log(Role.User);        // 1
console.log(Role.Admin);       // 2 (auto-increment)
console.log(Role[2]);          // "Admin"

//string enum
enum Status {
  Active = "ACTIVE",
  Pending = "PENDING",
  Blocked = "BLOCKED"
}
//both
enum Mix {
  A = 1,
  B = "hello"
}
//example of enum 
//when we want some particular values only then we use enums 
enum PaymentStatus {
  Success = "SUCCESS",
  Failed = "FAILED",
  Pending = "PENDING",
}

function updatePayment(status: PaymentStatus) {
  console.log("Payment is:", status);
}

updatePayment(PaymentStatus.Success);

//interface

interface Users {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
}

const userInfo: Users = {
  id: 1,
  name: "Srushti",
  email: "srushti@example.com"
};
console.log(userInfo);

//extending interface
interface Address {
  city: string;
  zip: number;
}

interface Employee extends Users, Address {
  salary: number;
}
const emp1: Employee = {
  id: 101,
  name: "Srushti Amin",
  email: "srushti@example.com",
  city: "Ahmedabad",
  zip: 380015,
  salary: 90000
};

console.log(emp1);

//as -assigning type in Ts
// we can access properties and method related to that type by doing this 
let value: any = "Srushti";
let len = (value as string).length;
console.log(len);

//as const - when we dont want to change type or value 
// const user_Info = {
//   name: "Srushti",
//   role: "admin"
// as const;

//as any - typically assigning any to type as to bypass ts in some cases 
let x = "hello" as any;
x = 10;  // allowed
x = {};  // allowed
//not null 
// even if the type is undefined then also ts will pass it 
// function getLength(str?: string) {
//   return str!.length; 
// }

//satisfies 

//check value matches it types but it do nto changes it interface 
interface User_value {
  name: string;
  age: number;
}

const userinfo = {
  name: "Srushti",
  age: 21
} satisfies User_value;
console.log(userinfo);//will throw error if any value is missing 


export{}