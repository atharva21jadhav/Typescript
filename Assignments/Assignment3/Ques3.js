var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(radius) {
        return _super.call(this, radius) || this;
    }
    CircleX.prototype.Circumference = function () {
        var result = 0;
        result = 2 * this.PI * this.radius;
        return result;
    };
    return CircleX;
}(Circle));
var circleXObject = new CircleX(10);
console.log('Area of circle : ' + circleXObject.Area());
console.log('Circumference of circle ' + circleXObject.Circumference());
