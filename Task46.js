function greet (name,callback){
    console.log("hello "+name+"!");
    callback ();
}
function sayGoodbye(){
    console.log("Good bye");
}
greet ("njn",sayGoodbye);