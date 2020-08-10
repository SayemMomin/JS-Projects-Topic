function brickCalculator(n){
    if(n <= 10){
        
         totalBrick = Brick10;
        
    }
   if(n > 10 && n <= 20){
        var feet2 = n* 12
        var brick20 = feet2 * 1000;
        var firstPart = 10*Brick10;
        var remaining = n -10;
        var secondPart = remaining * brick20;
            totalBrick = firstPart + secondPart;

        
    }
    if(n > 20){
        var feet3 = n* 10
        var brick20Up = feet3 * 1000;
        var firstPart = 10*Brick10;
        var secondPart = 10*brick20;
        var remaining = n - 20;
        var thirdPart = remaining * brick20Up;
        totalBrick = firstPart + secondPart + thirdPart;
       
    }

    
    return totalBrick;
}
var totalResult = brickCalculator(12);
console.log(totalResult);