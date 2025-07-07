const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter your name :  ",(name) => {
    const nme=function (x){
        var x;
       return x;

    };
    let result=nme(name);
    console.log("Hello  "+result);
    readline.close();
    nme();
});
