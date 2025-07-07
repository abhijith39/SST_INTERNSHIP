const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter your name: ", (name) => {
    readline.question("Enter your age  : ", (age) => {

function nameage(){
 console.log("My name is  "+name+" im "+age+" years old");
 }
 nameage();
 readline.close();
})
})
