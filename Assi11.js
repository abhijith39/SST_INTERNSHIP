const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the length of the side A  : \n", (a) => {
    readline.question("Enter the length of the side B : \n", (b) => {
        let x = parseInt(a)
        let y = parseInt(b)
        let area = (0.5*(a*b))
    console.log("The area of the triangle  is : "+area);
    readline.close();
    });
});