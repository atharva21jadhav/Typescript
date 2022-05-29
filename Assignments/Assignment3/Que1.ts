class Arthmetic {

    Number1:number;
    Number2:number;

    constructor(num1:number, num2:number) 
    {
        this.Number1 = num1;
        this.Number2 = num2;
    }

    Addition():number
    {
        var result:number = 0;
        result = this.Number1 + this.Number2;
        return result;
    }

    Subtraction():number
    {
        var result:number = 0;
        result = this.Number1 - this.Number2;
        return result;
    }

    Multiplication():number
    {
        var result:number = 0;
        result = this.Number1 * this.Number2;
        return result;
    }

    Divison():number
    {
        var result:number = 0;
        result = this.Number1 / this.Number2;
        return result;
    }
}

var obj1 = new Arthmetic(5,10);

console.log(obj1.Addition());
console.log(obj1.Subtraction());
console.log(obj1.Multiplication());
console.log(obj1.Divison());
