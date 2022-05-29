var ret:number = 0;  //global var

//Regular function
function Addition1(no1:number, no2:number):number {
    var ans:number = 0;   //local var
    ans = no1 + no2;
    return ans;
}

ret = Addition1(10,11);
console.log("Addition is: " + ret);

//Anonymous function
var Addition2:Function = function (no1:number, no2:number):number{
    var ans:number = 0;   //local var
    ans = no1 + no2;
    return ans;
}

ret = Addition2(10,11);
console.log("Addition is: " + ret);


//Fat Arrow, Lambda, Arrow function
var Addition3:Function = (no1:number, no2:number):number =>{
    var ans:number = 0;   //local var
    ans = no1 + no2;
    return ans;
}

ret = Addition3(10,11);
console.log("Addition is: " + ret);

/* 
Addition2= function (no1:number, no2:number):number{
    var ans:number = 0;   //local var
    ans = no1 * no2;
    return ans;
}


ret = Addition2(10,11);
console.log("Addition is: " + ret); */


