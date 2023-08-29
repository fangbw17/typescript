var Point;
(function (Point) {
    Point[Point["top"] = 0] = "top";
    Point[Point["left"] = 1] = "left";
    Point[Point["right"] = 2] = "right";
    Point[Point["bottom"] = 3] = "bottom";
})(Point || (Point = {}));
var point = Point.right;
console.log(point);
console.log(Point[point]);
var diceRoll;
diceRoll = 20;
diceRoll = 'pass';
diceRoll = 'fail';
diceRoll = 2;
