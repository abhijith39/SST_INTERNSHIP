const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Give the range to print even number ", (n) => {
    var num=parseInt(n)
    let i=1;
    while (i<=num)
        {
            if (i%2==0)
                {
                    console.log(i)
                }
                i++
        
            }
            readline.close();
        });