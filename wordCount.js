var speech = "I am a learner of web development. So, I'm learning";
var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}
count++
console.log(count)




// var speech = "I am a       learner of web development. So, I'm learning";
// var count = 0;
// for(var i = 0; i < speech.length; i++){
//     var char = speech[i];
//     if(char == " " && speech[i-1] !=" "){
//         count++;
//     }
// }
// count++
// console.log(count)

// function tinyfriend(names){
//     var largestName = names[0];
//     for(var i = 0; i < names.length; i++){
//         var nameCharacters = names[i];
//         if (nameCharacters < largestName){
//             largestName = nameCharacters;
//             }
//     }
 
   
//     return largestName;
// }
// var largestName1 = tinyfriend(["yam", "Min", "Ami", "lal", "Hamza", "lalaBanu"]);
// //["Sayem"," Momin", "Amir", "Hamza"];
// console.log(largestName1);

