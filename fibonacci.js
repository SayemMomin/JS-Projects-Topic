
// // 0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55

var fibo = [0, 1]
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fobo[4] = fibo[4-1] + fobo[4-2];
// fino[n] = fibo[n-1] + fibo[n-2];

for (let i = 2; i <=12 ; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2])
   
}
console.log(fibo)







// iterative way



// function fibonacci(n){
//     var fibo = [0, 1];
//     for (var i = 2; i <=n; i++){
//         fibo[i]= fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }


// function fibonacciRecursive(n){

        // stoping condition
        
//     if(n == 0) {
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }
//     else {
//         return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
//     }

// }

// function fibonacciRecursive(n){
//     if (n == 0){
//         return [0];
//     }
//     else if ( n == 1){
//         return [0, 1]
//     }
//     else{
//         var fibo = fibonacciRecursive(n - 1);
//         var nextElement = fibo[n - 1] + fibo[n - 2];
//         fibo.push(nextElement);
//         return fibo;
//     }
// }
// var result = fibonacciRecursive(10);
// console.log(result)