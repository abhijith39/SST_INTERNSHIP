class calcu
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    sum()
    {
        const a=this.a+=this.b;
        return this.a;   
    }
    sub()
    {
        const b=this.a-=this.b;
        return b;
    }
    mul()
    {
        const c=this.a*this.b;
        return c;
    }
    div()
    {
        const d=this.a/this.b;
        return d;
    }
}
const res=new calcu(20,20);
console.log(res.sum());
console.log(res.sub());
console.log(res.mul());
console.log(res.div());