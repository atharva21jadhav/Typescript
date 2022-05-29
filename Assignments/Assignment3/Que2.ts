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

var circleObject1:Circle = new Circle(10);
console.log('Area of circle1 = ' + circleObject1.Area());


var circleObject2:Circle = new Circle(5);
console.log('Area of circle2 = ' + circleObject2.Area());