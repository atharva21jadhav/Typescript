/*Maximum of three numbers*/

function main():void {
    var number1:number = 23;
    var number2:number = 89;
    var number3:number = 6;

    var maximumNumber:number = GetMaximumNumber(number1, number2, number3);
    console.log("Maxmimum number is " + maximumNumber);
}

function GetMaximumNumber(number1:number,number2:number, number3:number):number {
    return ((number1>number2 && number1>number3) ? number1 : (number2>number3 ? number2:number3));
}

// Main call
main();