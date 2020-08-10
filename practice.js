function tinyFriend(friendsName){
    var myLittleFriend = friendsName[0];
    for(i = 0; i < friendsName.length; i++){
        var nameCharecters = friendsName[i];
        if(nameCharecters < myLittleFriend){
            myLittleFriend = nameCharecters;
        }
    }
    return myLittleFriend;
}
var checkName = tinyFriend(["Azad", "Alaluddin", "jalalaUddin"]);
console.log(checkName)