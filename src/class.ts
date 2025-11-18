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
class StudentProfile {
  private _studentScore!: number;
  private _studentName!: string;

  constructor(nameInput: string, scoreInput: number) {
    this._studentName = nameInput;
    this.studentScore = scoreInput; // setter used
  }

  get studentName(): string {
    return this._studentName;
  }

  set studentName(newName: string) {
    this._studentName = newName.trim();
  }

  get studentScore(): number {
    return this._studentScore;
  }

  set studentScore(newScore: number) {
    if (newScore < 0 || newScore > 100) {
      throw new Error("Score must be between 0 and 100");
    }
    this._studentScore = newScore;
  }
}

const profileA = new StudentProfile("  Riya  ", 88);

console.log(profileA.studentName);  
console.log(profileA.studentScore);

//abstract
//can not created as an object 
//can be inherited by child class only 
abstract class Animal {
  abstract makeSound(): void; // child MUST implement

  move() {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks: Woof!");
  }
}

const d = new Dog();
d.makeSound(); // Dog barks: Woof!
d.move();      // Animal is moving

//with constructor and fields 
abstract class Person1 {
  constructor(protected name: string) {} // protected so children can use it

  abstract describe(): void;

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

class Student1 extends Person1 {
  constructor(name: string, private roll: number) {
    super(name);
  }

  describe() {
    console.log(`I am ${this.name}, roll no ${this.roll}`);
  }
}

const s1 = new Student1("Riya", 5);
s1.greet();     // Hello, my name is Riya
s1.describe();  // I am Riya, roll no 5

//inheritance
//allow new class to inherit property from the existing one and additionally add it own properties also 
//extend keyword is used to establish inheritance 
class Person2 {
  constructor(public name: string) {}

  greet() {
    console.log("Hello, I am " + this.name);
  }
}

class Student2 extends Person2 {
  constructor(name: string, public roll: number) {
    super(name); // call parent constructor
  }

  study() {
    console.log(this.name + " is studying.");
  }
}

const s2 = new Student2("Riya", 5);
s2.greet();   // Inherited from Person
s2.study();   // Own method
//polymorphism
    class Animals {
        makeSound(): string {
            return "Generic animal sound";
        }
    }

    class Dogs extends Animals {
        makeSound(): string {
            return "Woof!";
        }
    }

    class Cats extends Animals {
        makeSound(): string {
            return "Meow!";
        }
    }

    const myPet: Animals = new Dogs(); // myPet is typed as Animal, but holds a Dog instance
    console.log(myPet.makeSound()); // Output: Woof!

    const my_Pet: Animals = new Cats(); // myPet is typed as Animal, but holds a Dog instance
    console.log(my_Pet.makeSound()); // Output: Woof!

    //overloading
    class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        throw new Error("Invalid arguments");
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));      // Output: 8
console.log(calc.add("Hello, ", "World!")); // Output: Hello, World!

//static member 
//access by classname only not object 
class Circle2 {
    // Static property (constant)
    static readonly PI: number = 3.14159;

    // Instance property
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Instance method
    getArea(): number {
        return Circle2.PI * this.radius * this.radius;
    }

    // Static method
    static calculateCircumference(radius: number): number {
        return 2 * Circle2.PI * radius;
    }
}

// Accessing static property
console.log(Circle2.PI); // Output: 3.14159

// Calling static method
console.log(Circle2.calculateCircumference(5)); // Output: 31.4159

// Creating an instance
let myCircle2 = new Circle2(10);

// Accessing instance method
console.log(myCircle2.getArea()); // Output: 314.159
export{}