// 5! = 1*2*3*4*5


var i = 1;
var factorial = i
while(i <=5){
    factorial = factorial * i;

    // show again and again with full series
    console.log(i, factorial);
    i++
}

// show one time with final result
console.log(factorial);

function fact(n){
    var i = 1;
    var factorial = i
    while(i <=n){
     factorial = factorial * i;
     i++
    }
    return factorial;
}

var result = fact(10);
console.log(result)