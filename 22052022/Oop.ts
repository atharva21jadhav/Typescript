// Object Oriented Programming - (OOP)

/*
    Object oriented thinking:
    
    1. Kay karaycha ahe? -> Behavior/Functions
        - Addition and Subtraction

    2. Kay lagnar ahe? -> Characteristics/ Variables
        - 2 values jyavar operation honar, 1 number answer thevayla
*/


// class defination
class Arthmetic
{
    //Characteristics
    // var keyword add karaycha nahi..
    no1:number;
    no2:number;

    // parameterized constructor
    constructor(a:number, b:number){
        console.log("Inside constructor");
        this.no1 = a;
        this.no2 = b;
    }

    //Behavior
    // function keyword add karaycha nahi..
    Addition():number {
        var ans:number = 0;   //local var
        ans = this.no1 + this.no2;
        return ans;
    }
    
    Subtraction():number {
        var ans:number = 0;   //local var
        ans = this.no1 - this.no2;
        return ans;
    }
    
}

var obj1 = new Arthmetic(10,11);
var obj2 = new Arthmetic(20,21);

var ret:number = 0;

ret = obj1.Addition();
console.log("Addition is : " + ret);

ret = obj1.Subtraction();
console.log("Subtraction is : " + ret);