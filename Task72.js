const person={
    firstName:"john",
    lastName:"Doe",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    
    }

}
const member={
    firstName:"hege",
    lastName:"nilsen",
}
let fullName=person.fullName.bind(member);
console.log(fullName());
