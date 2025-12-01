//extending interface 
// having there own property along with property of other interface 
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}
const emp: Employee = {
  name: "Srushti",
  age: 21,
  salary: 50000
};
console.log(emp);

//extending multiple interfaces

interface A {
  x: number;
}

interface B {
  y: number;
}

interface C extends A, B {
  z: number;
}const obj: C = {
  x: 10,
  y: 20,
  z: 30
};
console.log(obj);
//extending and overriding properties 

interface Animal {
  sound: string;
}

interface Dog extends Animal {
  sound: "bark"; // more specific
}

const pet: Dog = {
  sound: "bark"
};

console.log(pet);
console.log(pet.sound);

//extending with optional property 
interface Human {
  name: string;
  age?: number; 
}

interface Student extends Human {
  rollNo: number;
}

const stu: Student = {
  name: "Srushti",
  rollNo: 23
};

console.log(stu);
console.log(stu.name);
console.log(stu.age);
console.log(stu.rollNo);

//extending interface with function 
interface Shape {
  area(): number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

const rect: Rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  }
};

console.log(rect);
console.log("Area =", rect.area());
//extending type aliases 

type Basic = {
  id: number;
};

interface Advanced extends Basic {
  title: string;
}

const item: Advanced = {
  id: 101,
  title: "Extended Example"
};

console.log(item);
console.log(item.id);
console.log(item.title);
//example
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  name: "Srushti",
  permissions: ["read", "write", "delete"]
};

console.log(admin);
console.log(admin.id);
console.log(admin.name);
console.log(admin.permissions);

///hybrid type
interface Counter {
  (): void;        // callable function
  count: number;   // property
}

function createCounter(): Counter {
  const c = function () {
    c.count++;
  } as Counter;

  c.count = 0;

  return c;
}

const counter = createCounter();

counter();  
counter();
console.log(counter.count); // 2


//declaration merges
interface User {
  id: number;
}

interface User {
  name: string;
}

const person: User = {
  id: 1,
  name: "Srushti"
};
console.log(person);
export{}