function main2():void {
    var numArray:Array<number> = [23, 6, 7, 4, 5, 7];
    var sum:number = Summation(numArray);
    console.log("Addition is "+ sum);
}

function Summation(numArray:Array<number>):number {
    var initalVal:number=0;
    var sum:number = numArray.reduce((p:number,c:number):number=>{
        return p+c;
    },initalVal)
    return sum;
}

main2();