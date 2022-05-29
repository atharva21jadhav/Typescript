function main2() {
    var numArray = [23, 6, 7, 4, 5, 7];
    var sum = Summation(numArray);
    console.log("Addition is " + sum);
}
function Summation(numArray) {
    var initalVal = 0;
    var sum = numArray.reduce(function (p, c) {
        return p + c;
    }, initalVal);
    return sum;
}
main2();
