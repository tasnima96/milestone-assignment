// var depth = 22;
// var animal = 0;
// if (depth <= 10){
//     animal = depth * 50;
// }
// else if (depth <= 20){
//     var firstpart = 10 * 50;
//     var remaining = depth - 10;
//     var secondPart = remaining * 100;
//     animal = firstpart + secondPart;
// }
// else{
//     var firstpart = 10 * 50;
//     var secondPart = 10 * 100;
//     var remaining = depth - 20;
//     var thirdPart = remaining * 300;
//     animal = firstpart + secondPart + thirdPart;
// }
// console.log(animal);
// --------------------------------------------------------------------
// function
function animalCalcuator(depth){
    var animal = 0;
    if (depth <= 10){
        animal = depth * 50;
    }
    else if (depth <= 20){
        var firstpart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstpart + secondPart;
    }
    else{
        var firstpart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstpart + secondPart + thirdPart;
    } 
    return animal;
}
var showAnimal = animalCalcuator(12);
console.log(showAnimal);