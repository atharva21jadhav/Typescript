var no1:number = 10;
var number2: number = 20;

var ans:number;

function addition(val1:number, val2:number): number
{
    return val1+val2;
}

function displayOutput(result:number):void {
    console.log(result);
}

ans = addition(no1, number2);
displayOutput(ans);
