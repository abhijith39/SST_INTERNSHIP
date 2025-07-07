function applyoperator (value,operator){
    return operator(value);
}
function double (num){
    return num*2;
}
console.log( applyoperator (4,double));