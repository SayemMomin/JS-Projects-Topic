var marks = [45, 21, 37, 82, 29];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max) {
        max = element;
    }
}
console.log(max)