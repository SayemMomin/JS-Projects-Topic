function isLeapYear(year){
let remainder = year % 4;
let remainder2 = year % 100;
let remainder3 = year % 400;

 if(remainder == 0 && remainder2 != 0 || remainder3 == 0){
    return true;
} else{
        return false;
    }
}

let leapYear = isLeapYear(1800)
console.log(leapYear)