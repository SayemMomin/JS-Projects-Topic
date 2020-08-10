var numbers = [1, 2, 4, 5, 2, 9, 6, 9, 45, 50]
var uniqueName = []

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    var index = uniqueName.indexOf(element);
        if(index == -1){
            uniqueName.push(element);
            console.log(uniqueName);
        }
}
