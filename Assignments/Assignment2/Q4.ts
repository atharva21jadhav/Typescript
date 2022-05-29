function main4():void {
    var num:number = 153;
    var isNumberArmstrong:boolean = ChkArmstrong(num);
    if(isNumberArmstrong){
        console.log("Is it Armstrong number");
    }
    else{
        console.log("Is it not Armstrong number");
    }
}

function ChkArmstrong(num:number):boolean {
    var numTostr:string = num.toString();
    var power:number = numTostr.length;
    var sum:number = 0;
    for(var i:number = 0; i<power; ++i){
        var currCharAsNum:number = +numTostr[i];
        sum += Math.pow(currCharAsNum, power);
    }

    if(sum === num){
        return true;
    }
    return false;
}

main4();