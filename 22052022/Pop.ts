// Procedure oriented programming - (POP)

function Addition(no1:number, no2:number):number {
    var ans:number = 0;   //local var
    ans = no1 + no2;
    return ans;
}

function Subtraction(no1:number, no2:number):number {
    var ans:number = 0;   //local var
    ans = no1 - no2;
    return ans;
}


var no1:number = 10; //global var
var no2:number = 11; //global var
var ret:number = 0;  //global var

ret = Addition(no1, no2);
console.log("Addition is : " + ret);

ret = Subtraction(no1, no2);
console.log("Subtraction is : " + ret);
