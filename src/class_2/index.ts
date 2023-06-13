enum Point {
    top,
    left,
    right,
    bottom
}

const point: Point = Point.right
console.log(point);
console.log(Point[point])

type incomplete = 20
// 字面量类型
type testResult = 'pass' | 'fail' | incomplete
let diceRoll: testResult
diceRoll = 20;
diceRoll = 'pass'
diceRoll = 'fail'
diceRoll = 2
