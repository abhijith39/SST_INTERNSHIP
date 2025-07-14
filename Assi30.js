class sumofdigit{
    constructor(a){
        this.a=a;
    }
    Digits(){
        var result=0;
        while(this.a>0)
            {
            result+=this.a%10;
            this.a=parseInt(this.a/10);
        }
     return result;   
    }
}
const sum=new sumofdigit(235);
console.log(sum.Digits());