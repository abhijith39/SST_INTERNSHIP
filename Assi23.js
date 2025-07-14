function add(x,y,callback){
sum=x+y
console.log()
callback();
}
function addnme(x,y)
{
    console.log("Sum of the two numbers",sum)
}
add(5,5, addnme)
