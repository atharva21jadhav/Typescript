/*Display factors*/

function main3():void {
    DisplayFactors(20);
}

function DisplayFactors(num:number):void {
    var factorsStringForDisplaying:string = '';
    for(var i:number=1; i<=num/2; ++i){
        if(num%i === 0){
            factorsStringForDisplaying += i.toString()+"\t";
        }
    }
    console.log(factorsStringForDisplaying);
    
}

main3();