const greet=function(name){
    return "hello "+name+" !";
};
function displaygreeting(greetingfunction){
    console.log(greetingfunction(" john "));
}
console.log(greet(" alice "));
displaygreeting(greet)