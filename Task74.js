class car {
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

age(){
    const date=new Date();
    return date.getFullYear()-this.year;
    }
}
const MyCar= new car("ford",2014);
console.log("My car is "+MyCar.age()+" year old");