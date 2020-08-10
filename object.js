var student = { id: 131, phone: 1872376, name:"Kallo"}


function inchToFeet(feet){
    var mile = feet/5280;
    if(mile < 0){
        console.log("Invalied Input")
    }
    else{
        return mile;
    }
    
}

var mile = inchToFeet(-7832589754)
console.log(mile)

