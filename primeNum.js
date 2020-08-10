// var n = 77
// for (let i = 2; i < n-1; i++) {
//     console.log(i, n % i);
//     if (n % 1 == 0){
//         console.log('not prime num')
//         // break;
//     }
    
// }

function isPrime(n){
    for (let i = 2; i < n-1; i++) {
        
        if (n % 1 == 0){
            return 'not prime num'
        }
        
    }
    return ' prime num'
}

var result = isPrime(139)
console.log(result)