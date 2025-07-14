const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter the first number : ",(n1) => {
    readline.question("Enter second number : ",(n2) => {
        let x=parseInt(n1);
        let y=parseInt(n2);
        var avg= (x+y)/2;
        function average2 (){
            console.log("Average of two number is : "+avg);
        }
        average2();
        readline.close();
    })})



    

