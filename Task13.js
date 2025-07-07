const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the first number  : \n", (a) => {
    readline.question("Enter the second number : \n", (b) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        console.log("Initial number :  num1=",num1,",num2= ",num2);
        //logkcal operators 
        console.log(" Logical Operators : ");
        console.log("num1 && num2 : ",num1 && num2); //logical and
        console.log("num1 || num2 : ", num1 || num2);  //logical or
        console.log("!num1: ", !num1); //logical not
        readline.close();
    });
});