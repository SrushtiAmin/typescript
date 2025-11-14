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
