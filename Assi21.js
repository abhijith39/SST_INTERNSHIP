const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("Enter the a decimal value : ",(dec) => {
        function decimal(dec){
            let a=parseInt(dec)
            return a;
        }
        {
        var x=decimal(dec)
        console.log(x);
        readline.close();
        }
    })
    