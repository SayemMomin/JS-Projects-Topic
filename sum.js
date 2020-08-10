// var numbers = [20, 30, 40, 50, 60];
// var sum = 0;

// for(var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }

// console.log("totall of the number: ", sum)

function arrySum(numbers){
    var sum = 0;

    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;

}

//var numbers = [20, 30, 40, 50, 60];
var result = arrySum([20, 30, 40, 50, 60]);
console.log("totall of the number: ", result)