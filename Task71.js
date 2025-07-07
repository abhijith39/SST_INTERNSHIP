function  hasproperty(obj,prop){
    for (var key in obj){
        if (key===prop){
            return true;
        }
    }
    return false;
}
var person ={
    name:"Alphe",
    age:18,
    occupation:"Engineering"
};
var res=hasproperty(person,"name1");
if (res==true)
    {
        console.log("present");
    }
    else
    {
        console.log("Not presnet")
    }