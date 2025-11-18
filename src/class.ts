class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  greet() {
    console.log("Hello", this.name);
  }
}
//access modifier
const u1 = new User(1, "Srushti");
u1.greet();
class Account {
  private balance = 0;
  readonly accountType = "Savings";

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
//method and function 
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive() {
    console.log(this.brand + " is driving");
  }
}

const c1 = new Car("Toyota");
c1.drive();  // Toyota is driving


//instances of 

class Circle {
  radius: number;
  constructor(r: number) {
    this.radius = r;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square {
  side: number;
  constructor(s: number) {
    this.side = s;
  }
  area() {
    return this.side * this.side;
  }
}

function printArea(shape: Circle | Square) {
  if (shape instanceof Circle) {
    console.log("Circle Area:", shape.area());
  } else if (shape instanceof Square) {
    console.log("Square Area:", shape.area());
  }
}

printArea(new Circle(5));
printArea(new Square(4));

//constructor parameter and access modifier 

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Srushti", 21);
console.log(p1.name); 
console.log(p1.age);  

//public modifier  - accessible everywhere 
class Student {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const s = new Student("Amin");
console.log(s.name); // Allowed (public)

//private modifier
class BankAccount {
  private balance: number;

  constructor(amount: number) {
    this.balance = amount;
  }

  showBalance() {
    console.log("Balance:", this.balance);
  }
}

const acc = new BankAccount(500);
// console.log(acc.balance); // Error (private)
acc.showBalance();          // Allowed

//protected modifier
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    console.log("Salary:", this.salary); // Allowed (protected)
  }
}

const m = new Manager(80000);
m.showSalary(); 
// console.log(m.salary); // Error (protected)
class UserBlock {
  public username: string;      
  private password: string;     
  protected role: string;       

  constructor(username: string, password: string, role: string) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  showUser() {
    console.log(this.username, this.password, this.role);
  }
}

class Admin extends UserBlock {
  showRole() {
    console.log(this.role);  
  }
}

const a = new Admin("Srushti", "12345", "admin");

console.log(a.username); 

a.showUser();  
a.showRole();
//readonly
class User_block {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;         // ✔ allowed (assigning once)
    this.name = name;
  }
}

const b = new User(1, "Srushti");

console.log(b.id); // ✔ allowed (reading)

// u.id = 10;  ERROR: Cannot assign to readonly property
b.name = "Amin"; // allowed
//getter setter 

