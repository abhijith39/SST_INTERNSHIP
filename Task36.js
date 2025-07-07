const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter the radius  of the circle: ",(x) => {
    function circle (x){
        circle=Math.PI*Math.pow(x,2);
        return circle;


    }
    let a=circle(x)
    console.log(a);
    readline.close();
})
