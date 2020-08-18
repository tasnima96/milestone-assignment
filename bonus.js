let number = 59;
number = 79;
number = 119;
console.log(number);
// ---------------------------------------------------------------

const name = 'Asad';
console.log(name);
// ---------------------------------------------------------------

var marks = [89, 97, 89, 68, 94, 86, 79];
for (var i = 0; i < marks.length; i++){
    console.log(marks[i]);
}
console.log('outside');
console.log('gulistan');
// ---------------------------------------------------------------

function add(number1, number2){
    var total = number1 + number2;
    return total;
}
var result = add(65, 89);
console.log(result);
console.log('not adding this time');
console.log('not eating right now');
var result1 = add(144, 100);
console.log(result1);
// ----------------------------------------------------------------

function largestNum(num){
    var larger = num[0];
    for(var i = 0; i < num.length; i++){
        var element = num[i];
        if (element > larger){
            larger = element;
        }
    }
    return larger;
}
// var numbers = [45, 78, 89];
// var output = largestNum(numbers);
var output = largestNum([45, 78, 89]);
console.log(output);