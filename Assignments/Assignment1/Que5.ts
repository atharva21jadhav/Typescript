function main5():void {
    Fibonacci(21);
}

function Fibonacci(num:number):void {
    var startNum:number = 0;
    var nextNum:number = 1;
    var anotherNum:number = 0;
    var outputStr:string = '';
    outputStr += nextNum +"\t";
    while(anotherNum<num){
        anotherNum = startNum+nextNum;
        outputStr += anotherNum +"\t";
        startNum = nextNum;
        nextNum = anotherNum;
    }
    console.log(outputStr);
}


main5();