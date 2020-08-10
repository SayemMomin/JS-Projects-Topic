var mark = [34, 45, 98, 46, 69, 23];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest value is: ', max)