/*Area of circle*/
function main2() {
    var radius = 5;
    var area = GetAreaOfCircle(radius);
    console.log("Area of circle is " + area);
}
function GetAreaOfCircle(radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    return PI * radius * radius;
}
main2();
