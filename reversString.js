function reverseString(str){
    var reverse = "";
    for (let i = 0; i < str.length; i++) {
        const char  = str[i];
        reverse = char + reverse;
       
    }
    return reverse;
}

var statement = "Hello I am Big Boss.";
var forAlien = reverseString(statement);
console.log(forAlien)