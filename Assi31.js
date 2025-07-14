class multi
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    product()
{
    const ar=this.a*this.b;
    return ar;
}
};
const z=new multi(5,5);
console.log("The products of two numbers  is : "+z.product());
