const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter the side heigth : ",(a) => {
    readline.question("Enter the width : ",(b) => {
        let x=parseInt(a);
        let y=parseInt(b);
        var area=(a*b);
        function arearec(){
            console.log("Area of the rectangle : "+ area);
        }
        arearec();
        readline.close();
    })}) 