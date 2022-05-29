
class Circle {
    radius:number;
    PI:number = 3.14;
    constructor(radius) {
        this.radius = radius;
    }

    Area():number{
        var area:number = 0;
        area = this.PI * this.radius * this.radius;
        return area;
    }
}

class CircleX extends Circle
{
    constructor(radius:number)
    {
        super(radius)
    }
    Circumference():number
    {
        var result:number = 0;
        result = 2 *this.PI * this.radius;
        return result;
    }
}

var circleXObject:CircleX = new CircleX(10);
console.log('Area of circle : ' + circleXObject.Area());
console.log('Circumference of circle ' + circleXObject.Circumference());

