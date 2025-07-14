class area
{
    constructor(lengt,widt)
    {
        this.lengt=lengt;
        this.widt=widt;
    }

React()
{
    let area=this.lengt*this.widt;
    return area;    
}
}
const angle = new area(4,6);
console.log(" The area of reactangele : "+angle.React());