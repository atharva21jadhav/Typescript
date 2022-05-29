// Object Oriented Programming - (OOP)
/*
    Object oriented thinking:
    
    1. Kay karaycha ahe? -> Behavior/Functions
        - Addition and Subtraction

    2. Kay lagnar ahe? -> Characteristics/ Variables
        - 2 values jyavar operation honar, 1 number answer thevayla
*/
// class defination
var Arthmetic = /** @class */ (function () {
    // parameterized constructor
    function Arthmetic(a, b) {
        console.log("Inside constructor");
        this.no1 = a;
        this.no2 = b;
    }
    //Behavior
    // function keyword add karaycha nahi..
    Arthmetic.prototype.Addition = function () {
        var ans = 0; //local var
        ans = this.no1 + this.no2;
        return ans;
    };
    Arthmetic.prototype.Subtraction = function () {
        var ans = 0; //local var
        ans = this.no1 - this.no2;
        return ans;
    };
    return Arthmetic;
}());
var obj1 = new Arthmetic(10, 11);
var obj2 = new Arthmetic(20, 21);
var ret = 0;
ret = obj1.Addition();
console.log("Addition is : " + ret);
ret = obj1.Subtraction();
console.log("Subtraction is : " + ret);
