let coures=["HTML","CSS","Javascript","react","Node.js","python"];
console.log("Original array : "+coures);

//let lastElement=coures.pop();
//console.log("After Removed the last element : "+coures);

//let firstelement=coures.shift();
//console.log("After removed first element starting from index : "+coures)

coures.splice(1,4);
console.log("After removed 2 element starting form index : "+coures);