const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter the value  : ",(x) =>{
function sqr (x){
    var square;
    result=(x*x);
    return result;
}
var res = sqr(10);
console.log(res);
readline.close();
})