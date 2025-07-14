const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter the value of celcius : ",(cel) =>{
    var cel=parseInt (cel)
    var fah=(9/5)*cel+32
    console.log("The fahrenheit value is ",+fah);
    readline.close();
});