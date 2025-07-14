
const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter first number \n",(num1) =>{
    readline.question("Enter second number \n",(num2) =>{
    const sum= parseInt(num1) +parseInt(num2);
    const sub= parseInt(num1) -parseInt(num2);
    const mul= parseInt(num1) *parseInt(num2);
    const div= parseInt(num1) /parseInt(num2);
    const mod= parseInt(num1) %parseInt(num2);
    console.log("Sum of your number : "+sum+".")
    console.log("Subtraction of your number  "+sub+".")
    console.log("Multiplication of your number  "+mul+".")
    console.log("Division of your number  "+div+".")
    console.log("Modulus / Remainder of your number  "+div+".")
    readline.close();

})})