//function that retains access to its outer function variable

// function outer(){
//     let outerVar = "I am in the outer scope!";

//     function inner(){
//         console.log(outerVar);
//         outerVar = "updated"
//     }
//     return inner;
// }
// const closure = outer();

// closure();
// closure();

function counter(){
    let count = 0;

    return function(){

        count ++;
        return count;

    }
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());