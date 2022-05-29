// Procedure oriented programming - (POP)
function Addition(no1, no2) {
    var ans = 0; //local var
    ans = no1 + no2;
    return ans;
}
function Subtraction(no1, no2) {
    var ans = 0; //local var
    ans = no1 - no2;
    return ans;
}
var no1 = 10; //global var
var no2 = 11; //global var
var ret = 0; //global var
ret = Addition(no1, no2);
console.log("Addition is : " + ret);
ret = Subtraction(no1, no2);
console.log("Subtraction is : " + ret);
