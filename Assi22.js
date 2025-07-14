const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("Enter date of birth : ",(test) => {
    today =new Date();
   var day=today.getFullYear()
   var age=day-test;
   console.log(age);

  readline.close();

});

