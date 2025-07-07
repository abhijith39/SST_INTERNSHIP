const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the first number  : \n", (a) => {
    readline.question("Enter the second number : \n", (b) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        console.log("Initial number :  num1=",num1,",num2= ",num2);

        // comparison operator
        console.log("Comparison Operators");
        console.log("num1 == num2 : ",num1 == num2); //equal to
        console.log("num1 != num2 : "  ,num1 != num2); //not equal to
        console.log("num1 === num1 : ",num1 === num1); //strict equal to
        console.log("num1 !== num2 : ",num1 !== num2); //strict not equal to
        console.log("num1 >  num2 : ", num1 > num2); //greater than
        console.log("num1 < num2 : ",num1 < num2); //less than
        console.log("num1 >= num2 : ",num1 >= num2); //greater than or equal to
        console.log("num1 <=  num2 : ",num1 <= num2); //less than ot equal to 
        readline.close();
    });
});