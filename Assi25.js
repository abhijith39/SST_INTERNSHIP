const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the name  of the student : ",(std) =>{
    readline.question("Enter the  roll number of student : ",(roll) =>{
        readline.question("Enter the age of the student : ",(age) =>{
            readline.question("Enter the class : ",(clas) =>{
                var details={
                    name:(std),
                    roll:(roll),
                    age:(age),
                    class:(clas),
                    
                }
                const student=function(){
                    console.log(details);
                }
                student();
                readline.close();

             })

            })
        })
    });

