let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b", "c"];
console.log(numbers);
console.log(names);

//readonly
let nums: readonly number[] = [1, 2, 3];

nums.push(4); //  cannot modify
