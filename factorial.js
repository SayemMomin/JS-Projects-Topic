var fact = 1;
    for(var i = 1; i <= 10; i++){
        fact = fact * i;
        
       console.log(i, fact)
    }

function factorial(num){
    var fact = 1;
    for(var i = 1; i <= num; i++){
        fact = fact * i;
        
    //    console.log(fact, i)
    }
    
    return fact;
}
var result = factorial(10);
console.log(result)

