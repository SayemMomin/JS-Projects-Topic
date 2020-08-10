function tinyFriend(friendsName){
    var myLittleFriend = friendsName[0];
    for(i = 0; i < friendsName; i++){
        var nameCharecters = friendsName[i];
        if(nameCharecters.length < myLittleFriend.length){
            myLittleFriend = nameCharecters;
        }
    }
    return myLittleFriend;
}
var checkName = tinyFriend(["kala", "Azad", "abir", "Alalluddin", "Alalureygterddin", "jalalaUddin"]);
console.log(checkName)