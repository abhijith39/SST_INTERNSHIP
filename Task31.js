function add (x)
{

    let number =0;
    while ( x>0)
        {
     number +=(x%10);
     x = parseInt(x/10);
        
    }
    console.log(number);
};
add(555);