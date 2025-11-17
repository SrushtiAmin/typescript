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

