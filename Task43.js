function changecarpricevalue(price){
    price=250000;
    console.log("insider function price ",price);
}
let carprice=200000;
console.log("before function call",carprice);
changecarpricevalue (carprice);
console.log("After function call car price : ",carprice);
