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
  readonly id: number;
  name: string;
};

const user: User = { id: 1, name: "Srushti" };
user.name = "Amin"; //  OK
// user.id = 2;  Error: Cannot assign to 'id' because it is a read-only property
console.log(user);
//storing data using object key vaalue pair 
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
export{}