function main3():void {
    var numArray:Array<number> = [23,89,6, 29, 56, 45, 77, 32];
    var secondMaxNumber:number = SecondMaximum(numArray);
    console.log("Secod maximum number is "+ secondMaxNumber);
}

function SecondMaximum(numArray:Array<number>):number {
    numArray.sort();
    return numArray[numArray.length-2];
}

main3();