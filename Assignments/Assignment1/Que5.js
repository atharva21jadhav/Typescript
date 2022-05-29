function main5() {
    Fibonacci(21);
}
function Fibonacci(num) {
    var startNum = 0;
    var nextNum = 1;
    var anotherNum = 0;
    var outputStr = '';
    outputStr += nextNum + "\t";
    while (anotherNum < num) {
        anotherNum = startNum + nextNum;
        outputStr += anotherNum + "\t";
        startNum = nextNum;
        nextNum = anotherNum;
    }
    console.log(outputStr);
}
main5();
