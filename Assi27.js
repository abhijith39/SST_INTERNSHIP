const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the limit of array  ",(arr) => {
    readline.question("Enter the number ", (num) => {
        
    for(i=0;i<arr;i++)
        {
            arr.push(num);
                console.log(arr);
        }
        console.log(arr);
        readline.close();

       })
    });
    