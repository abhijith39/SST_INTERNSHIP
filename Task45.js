function outerFunction()
{
    let outervariable ="i am outer side !";
    function innerFunction (){
        console.log(outervariable);
    
    }
    return innerFunction
}
const myClosure = outerFunction();
myClosure();