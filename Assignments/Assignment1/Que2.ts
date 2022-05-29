/*Area of circle*/

function main2():void {
    var radius:number =5;
    var area:number = GetAreaOfCircle(radius);

    console.log("Area of circle is " + area);   
}

function GetAreaOfCircle(radius:number, PI:number=3.14):number {
    return PI*radius*radius;
}

main2();