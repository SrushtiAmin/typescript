//have predefined type entries 
let user: [string, number] = ["Srushti", 21];
console.log(user);

//implicit type ts will take type by itself 
let person = ["Amin", 22]; 
// inferred: (string | number)[]

let user1: [string, number] = ["me", 21];

let name1 = user1[0];  
let age = user1[1];   
console.log(name1);
console.log(age);

let student: [string, number] = ["John", 18];

student[1] = 19; 
console.log(student);


//optional 
let employee  : [string, number, string?];

employee = ["Amin", 24];
employee = ["Amin", 24, "Developer"];
console.log(employee);

//rest
let data: [string, ...number[]] = ["marks", 90, 95, 88];
console.log(data);
//first is string others are taken as numbers 

//destructuring
let users: [string, number] = ["Srushti", 21];

let [username, age_no] = user;
console.log(user);

//function
function logUser(user: [string, number]) {
  console.log(user[0], user[1]);
}
let u: [string, number] = ["Amin", 23];

logUser(u);
//throw error if we enter number first and then string


interface User{
  name: string,
  birthdate: string,
  
}

interface User {
  name: string,

}



