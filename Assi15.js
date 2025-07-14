const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Enter a string  : ", (string) => {
    readline.question("Enter a integer value  : ", (int) => {
        function print(){
            console.log("string is : "+string+"  integer value is : "+int)
        }
        print();
    readline.close();
    })})
