function main3() {
    var numArray = [23, 89, 6, 29, 56, 45, 77, 32];
    var secondMaxNumber = SecondMaximum(numArray);
    console.log("Secod maximum number is " + secondMaxNumber);
}
function SecondMaximum(numArray) {
    numArray.sort();
    return numArray[numArray.length - 2];
}
main3();
