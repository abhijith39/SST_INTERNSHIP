function modifyobject(obj){
    obj.value=100;
    console.log(obj.value);
}
let myobj={value :50};
console.log(myobj.value);
modifyobject(myobj);
console.log(myobj.value);