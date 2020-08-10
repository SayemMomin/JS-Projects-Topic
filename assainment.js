// Feet to Mile

function feetToMile(feet){
    var mile = feet/5280;
    if(mile < 0){
        console.log("Invalied Input")
    }
    else{
        return mile;
    }
}

var mileCheck = feetToMile(26400)
console.log(mileCheck)

// Wood Calculator

function woodCalculator(chair, table, bed){
    var woodOfChair = chair * 1;
    var woodOfTable = table * 3;
    var woodOfBed = bed * 5;
    var totalWood = woodOfChair + woodOfTable + woodOfBed;
    return totalWood;
}
var totalWoodResult = woodCalculator(2, 2, 2);
console.log(totalWoodResult)


// Brick Calculator 

function brickCalculator(n){
    if(n <= 10){
        var feet1 = n* 15
        var total = feet1 * 1000;
        
    }
    else if(n <= 20){
        var feet2 = n* 12
        var total = feet2 * 1000;
        
    }
    else if(n > 20){
        var feet3 = n* 10
        var total = feet3 * 1000;
       
    }

    
    return total;
}
var totalResult = brickCalculator(30);
console.log(totalResult);


// Tiny Friend

function tinyFriend(friendsName){
    var myLittleFriend = friendsName[0];
    for(i = 0; i < friendsName.length; i++){
        var nameCharacters = friendsName[i];
        if(nameCharacters.length < myLittleFriend.length){
            myLittleFriend = nameCharacters;
        }
    }
    return myLittleFriend;
}
var checkName = tinyFriend(["Abir", "kalam", "Kamrul", "KarimUddin"]);
console.log(checkName)
