const globalConstant = "I am global Constant.";
let globalVariable = " I am global variable which can be re-assigned";

function demonstrateScope(){

    //Function 

    const functionConstant = "I am a constant within the function scope .";
    let functionVariable = "I am variable within the function";


    if(true) {
        const blockConstant = " I am constant within the block.";
        let blockVariable = "I am variable within the block";


        console.log(globalConstant );
        console.log(globalVariable );
        console.log(functionConstant );
        console.log(functionVariable );
        console.log(blockConstant );
        console.log(blockVariable );

        globalVariable = "Global variable reassigned inside block";
        functionVariable = "Function variable reassigned inside block";
        blockVariable = "Block variable reassigned inside";

    }

    //  console.log(blockConstant); 
    //  console.log(blockVariable);


    console.log(globalVariable);
    console.log(functionVariable);
}

demonstrateScope();

console.log(globalConstant);    
console.log(globalVariable);