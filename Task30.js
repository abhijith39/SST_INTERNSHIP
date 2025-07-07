const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter  heigth of  the side : ",(a) => {
    readline.question("Enter  width of side: ",(b) => {
        let x=parseInt(a);
        let y=parseInt(b);
        var area=(a*b);
        function arearec(){
            console.log("Area  : "+ area+".");
        }
        arearec();
        readline.close();
    })
}) 