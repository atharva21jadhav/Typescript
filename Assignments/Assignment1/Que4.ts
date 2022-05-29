function main4():void {
    var isPrime:boolean = ChkPrime(11);
    if(isPrime){
        console.log("It is prime number");
    }
    else{
        console.log("Not a prime");
    }
}

function ChkPrime(numToCheck:number):boolean {
    for(var i:number=2;i<=numToCheck/2;++i){
        if(numToCheck%i === 0){
            return false;
        }
    }
    return true;
}

main4();