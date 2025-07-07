function changecarpricebyreference(car){
    car.price=250000;
    console.log("insider function car price : ",car.price);
}
let car ={
    model : "toyota supra",
    price : 20000,
};
console.log("before function call car model :",car.model);
console.log("before function call car price : ",car.price);
changecarpricebyreference(car);
console.log("After function call car model : ",car.model);
console.log("After function call car price : ",car.price);
