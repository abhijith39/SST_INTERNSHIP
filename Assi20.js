const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
for (i=0;i<=5;i++){
    let star='*';

    for(j=1;j<=i;j++)
    {
        star+='*';
    }
    console.log(star)
}
readline.log("Enter the first word",(fw) => {
    readline.log("Enter the second number ",(sw) =>{
       if (fw==sw){
        console.log("both are same "+fw)
       }
      else {
        console.log("both are  not same "+sw)
       }
        
        readline.close();
    })
})
