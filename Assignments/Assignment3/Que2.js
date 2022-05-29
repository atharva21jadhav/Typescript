var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
    Circle.prototype.Area = function () {
        var area = 0;
        area = this.PI * this.radius * this.radius;
        return area;
    };
    return Circle;
}());
var circleObject1 = new Circle(10);
console.log('Area of circle1 = ' + circleObject1.Area());
var circleObject2 = new Circle(5);
console.log('Area of circle2 = ' + circleObject2.Area());
