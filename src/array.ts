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