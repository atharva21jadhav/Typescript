function main1():void {
    var numArray:Array<number> = [23,89,6, 29, 56, 45, 77, 32];
    var maxNumber:number = Maximum(numArray);
    console.log("Maximum number is "+ maxNumber);
}

function Maximum(numArray:Array<number>):number {
    if(numArray.length === 0){
        return -1;
    }
    var currMaxNumber:number = numArray[0];
    numArray.forEach(num=>{
        if(num>currMaxNumber){
            currMaxNumber = num;
        }
    })
    return currMaxNumber;
}

main1();