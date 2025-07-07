const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the to be multiplied : ",(a)=>{
for (var i=1;i<=10;i++){
    var Multi=i*a;
    console.log(""+i+"x"+a+"="+Multi);

}
readline.close();
});