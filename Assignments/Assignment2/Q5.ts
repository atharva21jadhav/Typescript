function main5():void {
    var strToCheck:string = "Pune Kothrud Marvellous InfoSystems";
    var hasMarvellous:boolean = ChkString(strToCheck);
    if (hasMarvellous) {
        console.log("String contains Marvellous in it");
    }
    else{
        console.log("String does not contain Marvellous in it");
    }
}

function ChkString(strToCheck:string):boolean {
    var arrayOfSplitString:Array<string> = strToCheck.split(" ");
    var hasMarvellous:boolean = false;
    arrayOfSplitString.forEach(s => {
        if(s === "Marvellous"){
            hasMarvellous = true;
        }
    })
    return hasMarvellous;
}

main5();