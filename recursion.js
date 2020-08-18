// 5! = 1*2*3*4*5;

function factorial(num){
    var fact = 1;
    for (var i = 1; i <= num; i++){
        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}

var result = factorial(5);
console.log(result);

// -----------------------------------------------------------------------
// Recursive way----------------------------------------------------------
function factorialRecursive(number){
    if (number == 0){
        return 1;
    }
    else{
        return number * factorialRecursive(number - 1);
    }
}
var showRecursive = factorialRecursive(6);
console.log(showRecursive);