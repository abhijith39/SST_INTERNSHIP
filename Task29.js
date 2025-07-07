const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});

function multi (n1,n2){
readline.question("Enter the first number   :  ",(n1) => {
    readline.question("Enter the second number ",(n2) => {
        let =parseInt(n1);
        let =parseInt(n2);
        multi=(n1*n2);
        console.log(multi);
        readline.close();
    })})}
    multi();