/*Maximum of three numbers*/
function main() {
    var number1 = 23;
    var number2 = 89;
    var number3 = 6;
    var maximumNumber = GetMaximumNumber(number1, number2, number3);
    console.log("Maxmimum number is " + maximumNumber);
}
function GetMaximumNumber(number1, number2, number3) {
    return ((number1 > number2 && number1 > number3) ? number1 : (number2 > number3 ? number2 : number3));
}
// Main call
main();
