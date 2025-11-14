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

const user1: User = {
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
export{}